import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import Login from './Login'
import Browse from './Browse'


const Body = () => {

    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>

        },{
            path:"/browse",
            element:<Browse/>
        }
    ])

  return (
    <div>
      
    </div>
  )
}

export default Body
