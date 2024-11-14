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

      
        <form className='absolute gap-4 text-white p-12 bg-black w-3/12 my-36 flex flex-wrap flex-col bg-opacity-80 right-0 left-0 mx-auto'>
            <h1 className='text-3xl font-bold py-4'>Sign In</h1>
            <input type="email" placeholder='Email address' className='p-2 m-2 bg-slate-800' />
            <input type="password" placeholder='Password' className='p-2 m-2  bg-slate-800' />
            <button type="button" className='p-2 m-4 rounded font-bold bg-red-600' >Sign In</button>
            <p>New to Netflix? <span className='text-blue-500 my-2'>Sign Up</span> Now</p>
        </form>
      
    </div>
  )
}

export default Login
