import React, { useEffect } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';


const Body = () => {
   
  const dispatch = useDispatch();

    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>

        },{
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const uid = user.uid;
          const email = user.email;
          const photoURL = user.photoURL;
          const displayName = user.displayName;
          dispatch(addUser({uid:uid,email:email,photoURL:photoURL,displayName:displayName}))
        } else {
          dispatch(removeUser())
        }
      })
    }, [])

  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body;
