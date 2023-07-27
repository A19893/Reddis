import React, { useState } from "react";
import "./index.css";
import {Link} from 'react-router-dom'
import { login } from "../../Services/login.service";
const SignupForm = () => {
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const clickHandler = async() => {
    const response=await login(name,password);
    console.log(response);
  };
  return (
    <>
      <div className="container">
        <div className="signupContainer">
        <h3>Login Page</h3>
          <div className="signupForm">
            <input type="text" value={name} name="username" placeholder="Username" onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="password" value={password} name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit" onClick={() => clickHandler()}><br/>
              Submit
            </button>
          </div>
          <Link to="/signup" style={{display:'table',margin:'auto'}}>Not a Registered User?</Link>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
