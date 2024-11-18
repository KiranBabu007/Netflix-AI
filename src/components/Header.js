import React from 'react'
import logo from '../assets/Netflix_Logo_RGB.png'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

 const navigate=useNavigate();

 const user=useSelector(store=>(store.user))
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
      <div className='absolute flex justify-between px-8 pr-16 py-2  bg-gradient-to-b bg-transparent from-black w-full z-10'>
        <img className='w-48' src={logo} alt="logo" />
        { user &&
          <div className="flex p-2">
          <img className='w-12 h-12 rounded' src={user.photoURL} alt="profile_pic" />
          <div className='p-2 font-mono font-bold text-white '>
            <p className='text-ellipsis'>user:{user.displayName}</p>
            <button onClick={handleSignout} className='text-red-400' >Sign Out</button>
          </div>
          
        </div>
        }
        
  </div>
  )
}

export default Header
