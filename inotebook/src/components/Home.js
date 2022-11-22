import React,{useState, useEffect} from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

export const Home = () => {
  const [user, setUser] = useState({
    "user": {
      "_id": "null",
      "name": "null",
      "email": "null",
      "date": "null",
      "__v": null
    }
  });
  
  const host = "http://localhost:1212"

  const getUser = async()=>{
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
        
      }
    });
    const json = await response.json();
    console.log("json is "+json);
    console.log('json.user.name is '+json.user.name);
    setUser(json);
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      getUser();
    }
  }, []);
  

  return (
    <>
      <div className="container my-5">
        <h2 className="my-3">User: {user.user.name}</h2>
        <AddNote/>
        <Notes/>
      </div>
    </>
  );
};

export default Home;
