import React, { useState,useRef } from "react";
import Header from "./Header";
import loginbackground from "../assets/loginbackground.png";
import {validate} from "../utils/validate";

const Login = () => {
  const [SignedIn, setSignedIn] = useState(true);
  const [errormsg, setErrormsg] = useState("");

  const ToggleSignIn = () => {
    setSignedIn(!SignedIn);
  };

  const name=useRef(null)
  const email=useRef(null)
  const password=useRef(null)

  const handleSubmit=()=>{
    const msg = validate(email.current.value,password.current.value);
    setErrormsg(msg)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={loginbackground} alt="logo" />
      </div>

      <form onSubmit={(e)=> e.preventDefault( )}
      className="absolute gap-4 text-white p-12 bg-black w-4/12 my-28 flex flex-wrap flex-col bg-opacity-80 right-0 left-0 mx-auto">
        <h1 className="text-4xl font-bold py-4">
          {SignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!SignedIn && <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-2 m-2  bg-opacity-50 bg-slate-800"
        />}
        <input
          type="email"
          ref={email}
          placeholder="Email address"
          className="p-2 m-2  bg-opacity-50 bg-slate-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-2   bg-opacity-50 bg-slate-800"
        />
        <button onClick={handleSubmit()} type="button" className="p-2 m-4 rounded  hover:bg-[#e02424] bg-[#f20202]">
          {SignedIn ? "Sign In" : "Sign Up"}
        </button>
          <div>
            <input type="checkbox" name="remember" id="" />
        <label htmlFor="remember">{' '}Remember Me</label> 
          </div>
        
        {SignedIn ? (
          <p>
            New to Netflix?{" "}
            <span
              className="text-blue-500 my-2 cursor-pointer "
              onClick={ToggleSignIn}
            >
              Sign Up
            </span>{" "}
            Now
          </p>
        ) : (
          <p>
            Already a member?{" "}
            <span
              className="text-blue-500 my-2 cursor-pointer "
              onClick={ToggleSignIn}
            >
              Sign In
            </span>{" "}
            Now
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
