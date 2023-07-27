import React,{useState} from "react";
import "./index.css";
import { Link,useNavigate } from "react-router-dom";
import { signup } from "../../Services/signup.service";
import { useDispatch } from "react-redux";
import { isAuthenticate } from "../../Features/authSlice";
const SignupForm = () => {
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const clickHandler = async() => {
    try{
      const response=await signup(name,password);
      dispatch(isAuthenticate());
      navigate("/home")
    }
   catch(err){
    alert(err.response?.data.message);
   }
  };
  return (
    <>
      <div className="container">
        <div className="signupContainer">
        <h3>Signup Page</h3>
          <div className="signupForm">
            <input type="text" name="username" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="password" name="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit" onClick={() => clickHandler()}><br/>
              Submit
            </button>
          </div>
          <Link to="/" style={{display:'table',margin:'auto'}}>Already a Registered User?</Link>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
