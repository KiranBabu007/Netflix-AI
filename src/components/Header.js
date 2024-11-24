import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_RGB.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleToggle = () => {
    dispatch(toggleSearch(gpt.showGPTSearch));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            photoURL: photoURL,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black flex justify-between px-8 pr-16 w-full z-20">
      <img className="w-48" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 mt-4">
          <button onClick={handleToggle} className="pr-4 -mt-4">
            <a
              className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring" 
            >
              <span className="absolute  rounded-md inset-0 border border-red-600 group-active:border-red-500"></span>
              <span className="rounded-md block border font-mono font-bold border-red-600 bg-red-600 px-6 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                GPT Search
              </span>
            </a>
          </button>

          <img
            className="w-12 h-12 rounded"
            src={user.photoURL}
            alt="profile_pic"
          />
          <div className="p-2 -mt-2 m-2 font-mono font-bold text-white ">
            <p className="text-ellipsis">{user.displayName}</p>
            <button onClick={handleSignout} className="text-red-400">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
