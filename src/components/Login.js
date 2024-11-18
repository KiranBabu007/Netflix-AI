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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [SignedIn, setSignedIn] = useState(true);
  const [errormsg, setErrormsg] = useState("");

  const ToggleSignIn = () => {
    setSignedIn(!SignedIn);
  };

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
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
              "https://lh3.googleusercontent.com/-nNoeKFKlEGE/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfknFf6fM8scsyD6d4HXynUT50ZQuOA/photo.jpg?sz=46",
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
      <div className="absolute">
        <img className="" h-screen src={loginbackground} alt="logo" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute gap-4 text-white p-12 bg-black w-4/12 my-28 flex flex-wrap flex-col bg-opacity-80 right-0 left-0 mx-auto"
      >
        <h1 className="text-4xl font-bold py-4">
          {SignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!SignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2  bg-opacity-50 bg-slate-800"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email address"
          className="p-2 m-2 bg-opacity-50 bg-slate-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-2 bg-opacity-50 bg-slate-800"
        />
        {errormsg && <p className="text-red-500">{errormsg}</p>}
        <button
          onClick={handleSubmit}
          type="button"
          className="p-2 m-4 rounded hover:bg-[#e02424] bg-[#f20202]"
        >
          {SignedIn ? "Sign In" : "Sign Up"}
        </button>
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
