import React from 'react'
import logo from '../assets/Netflix_Logo_RGB.png'

const Header = () => {
  return (
      <div className='absolute px-8 pr-16 py-2  bg-gradient-to-b bg-transparent from-black w-full z-10'>
        <img className='w-48' src={logo} alt="logo" />
  </div>
  )
}

export default Header
