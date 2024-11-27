import React, { useState, useRef } from "react";
import Header from "./Header";
import loginbackground from "../assets/loginbackground.png";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [SignedIn, setSignedIn] = useState(true);
  const [errormsg, setErrormsg] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    password: ''
  });

  const ToggleSignIn = () => {
    setSignedIn(!SignedIn);
  };

  const name = useRef();
  const email = useRef();
  const password = useRef();
  
  const dispatch = useDispatch();

  const resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        // Password reset email sent!
        alert("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(
          "Error , Please make sure you have entered the correct email in the email field"
        );
      });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      password: ''
    };
  
    if (!SignedIn && (!name.current.value || name.current.value.length < 2)) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }
  
    if (!email.current.value || !email.current.value.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
  
    if (!password.current.value || password.current.value.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }
  
    setErrorMessage(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    const msg = validate(email.current.value, password.current.value);
    setErrormsg(msg);
    if (msg) return;

    if (!SignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-6155-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdFu41cMXRWNK1EkDj_yH1bxeh9a0udswBpkyBNBYFsgcCEANkojvc63RsB56mXTPWhSqhDnWfJQOH9V7BymHd5Jj8XGwUJ-eQ.png?r=e6e",
          })
            .then(() => {
              const uid = user.uid;
              const email = user.email;
              const photoURL = user.photoURL;
              const displayName = user.displayName;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrormsg("Invalid Credentials or User already exists");
          // ..
        });
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrormsg("Invalid Credentials ");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img src={loginbackground} alt="logo" className="w-full h-full object-cover" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute gap-4 text-white p-6 sm:p-12 bg-black w-full sm:w-8/12 md:w-6/12 lg:w-4/12 my-28 flex flex-wrap flex-col bg-opacity-80 right-0 left-0 mx-auto"
      >
        <h1 className="text-2xl sm:text-4xl font-bold py-4">
          {SignedIn ? "Sign In" : "Sign Up"}
        </h1>

        {!SignedIn && (
          <div className="relative">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className={`p-2 m-2 w-full bg-opacity-50 bg-slate-800 ${
                errorMessage.name ? 'border-b-2 border-red-500' : ''
              }`}
            />
            {errorMessage.name && (
              <p className="text-red-500 text-sm ml-2 mt-1">{errorMessage.name}</p>
            )}
          </div>
        )}

        <div className="relative">
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className={`p-2 m-2 w-full bg-opacity-50 bg-slate-800 ${
              errorMessage.email ? 'border-b-2 border-red-500' : ''
            }`}
          />
          {errorMessage.email && (
            <p className="text-red-500 text-sm ml-2 mt-1">{errorMessage.email}</p>
          )}
        </div>

        <div className="relative">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className={`p-2 m-2 w-full bg-opacity-50 bg-slate-800 ${
              errorMessage.password ? 'border-b-2 border-red-500' : ''
            }`}
          />
          {errorMessage.password && (
            <p className="text-red-500 text-sm ml-2 mt-1">{errorMessage.password}</p>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-sm ml-2 mt-1 font-medium">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="p-2 m-2 bg-red-600 hover:bg-red-700 rounded"
        >
          {SignedIn ? "Sign In" : "Sign Up"}
        </button>
        {errormsg && <p className="text-red-500">{errormsg}</p>}

        <div>
          <input type="checkbox" name="remember" id="" />
          <label htmlFor="remember"> Remember Me</label>
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
        {SignedIn && (
          <p className="text-blue-500 cursor-pointer" onClick={resetPassword}>
            Forgot Password?
          </p>
        )}
      </form>
      
    </div>
  );
};

export default Login;
