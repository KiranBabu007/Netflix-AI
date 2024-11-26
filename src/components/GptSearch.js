import React from 'react';
import GptSuggestions from './GptSuggestions';
import GptSearchbar from './GptSearchbar';
import loginbackground from '../assets/loginbackground.png';

const GptSearch = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${loginbackground})` }}>
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="relative z-10">
        <GptSearchbar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
