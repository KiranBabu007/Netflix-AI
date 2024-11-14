import React from 'react'
import Header from './Header'
import loginbackground from '../assets/loginbackground.png'

const Login = () => {
  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img  src={loginbackground} alt="logo" />
      </div>

      
        <form className='relative p-12 bg-black  '>
            <h4>Sign In</h4>
            <input type="text" className='p-4 m-4' />
            <input type="text" className='p-4 m-4' />
            <button type="button" className='p-4 m-4' >Sign In</button>
        </form>
      
    </div>
  )
}

export default Login
