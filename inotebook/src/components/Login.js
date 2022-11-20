import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../context/alertContext";

const Login = (props) => {
    
    const host = "http://localhost:1212";
    const [details, setDetails] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    
    const context = useContext(AlertContext);
    const { showAlert } = context;
    showAlert('Invalid Cred','success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = details.email[0];
    const password = details.password[0];
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      console.log("Login Success");
      localStorage.setItem("token", json.authToken);
      navigate("/");
    }else{
        // console.log('Noooooo');
        // showAlert('Invalid Cred','success')
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: [e.target.value] });
    // console.log(details);
  };
  return (
    <>
      <div className="container">
        <h2 className="my-3">Login</h2>
        <form onSubmit={handleSubmit}>
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
    </>
  );
};

export default Login;
