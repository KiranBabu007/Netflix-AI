import React from 'react'
import GptSuggestions from './GptSuggestions'
import GptSearchbar from './GptSearchbar'
import loginbackground from '../assets/loginbackground.png'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img src={loginbackground} alt="logo" className="w-full h-full object-cover" />
      </div>
      <GptSearchbar />
      <GptSuggestions />
    </div>
  )
}

export default GptSearch
