import React from 'react'
import Header from './Header'
import loginbackground from '../../public/loginbackground.png'

const Login = () => {
  return (
    <div>
      <Header/>

      <div>
        <img src={loginbackground} alt="logo" />
      </div>
    </div>
  )
}

export default Login
