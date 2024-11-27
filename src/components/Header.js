import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_RGB.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/gptSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHome } from '@fortawesome/free-solid-svg-icons';


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
    <div className="absolute bg-gradient-to-b from-black flex flex-col justify-center items-center md:flex-row md:justify-between px-8 pr-16 w-full z-20">
      <img className="w-52 " src={logo} alt="logo" />
      <div className="flex items-center justify-between">
        

        {user && (
          <div className="flex items-center space-x-4 ml-4 mt-6 md:mt-0">
            <button
          className="relative group cursor-pointer ml-auto"
          onClick={handleToggle}
        >
          <a className="relative inline-block text-white">
            <span className="absolute rounded-md inset-0 border border-red-600 group-active:border-red-500"></span>
            <span className="rounded-md text-sm md:text-md border  font-mono font-bold border-red-600 bg-red-600 px-8 md:px-6 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1 flex items-center gap-2">
              <FontAwesomeIcon icon={gpt.showGPTSearch ? faHome : faMagnifyingGlass} />
              {gpt.showGPTSearch ? "Home Page" : "AI Search"}
            </span>
          </a>
        </button>
            <img
              className="w-12 h-12 rounded"
              src={user.photoURL}
              alt="profile_pic"
            />
            <div className="flex items-center space-x-2 flex-col justify-start">
              <p className="font-mono font-bold text-white truncate max-w-[100px]">
                {user.displayName}
              </p>
              <button 
                onClick={handleSignout} 
                className="text-red-400 whitespace-nowrap font-sans hover:text-red-500 font-semibold"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
