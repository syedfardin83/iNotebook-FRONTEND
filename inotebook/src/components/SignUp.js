import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const host = "http://localhost:1212";
  const [details, setDetails] = useState({name:"",email:"",password:""})
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(details.name);
    // console.log(details.email);
    // console.log(details.password);
    const email = details.email[0];
    const password = details.password[0];
    const name = details.name[0];
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password}),
    });
    const json = await response.json();
    // console.log(json);
    if(json.success){
      console.log('Login Success');
      localStorage.setItem('token',json.authToken);
      navigate("/");
      toast.success('Signup Successful.');
    } else {
      // console.log("Email: "+email);
      if (email === undefined || password === undefined || name===undefined) {
        toast.error("Entries cannot be empty.");
      } else {
        toast.error(json.msg);
      }
      console.log(json);
    }
  }
  const handleChange=(e)=>{
    setDetails({...details,[e.target.name]:[e.target.value]})
  }
  return (
    <>
      <div className="container">
        <h2 className="my-3">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Toaster/>
    </>
  );
};

export default Login;
