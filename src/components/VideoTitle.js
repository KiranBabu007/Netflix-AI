import React from 'react'
import play from '../assets/play.svg'

const VideoTitle = ({title, desc}) => {

    

  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-2/6'>{desc}</p>
      <div className='flex'>
        <button className='bg-gray-600 p-2 px-12 text-white text-lg opacity-55 decoration-clone rounded-md flex items-center'>
          <img src={play} alt="Play Icon" className='mr-2 opacity-100' />
          Play
        </button>
        <button className='mx-2 bg-gray-600 p-2 px-12 text-white text-lg opacity-55 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
