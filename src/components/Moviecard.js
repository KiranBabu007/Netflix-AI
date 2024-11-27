import React from 'react';
import { IMG_CDN } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Moviecard = ({ movieData }) => {
  if (!movieData) return null;
  
  const { 
    poster_path, 
    title, 
    vote_average, 
    release_date,
    overview 
  } = movieData;

  return (
    <div className='w-36 md:w-44 relative group cursor-pointer'>
      <div className='relative overflow-hidden rounded-lg'>
        
        <img 
          src={IMG_CDN + poster_path} 
          alt={title}
          className='w-full transition-transform duration-300 group-hover:scale-110'
        />
        
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='absolute bottom-0 p-4 text-white'>
            <h2 className='text-lg font-bold mb-1 line-clamp-1'>{title}</h2>
            
            <div className='flex items-center gap-2 mb-2'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
              <span className='text-sm'>{vote_average.toFixed(1)}</span>
              <span className='text-sm'>
                ({new Date(release_date).getFullYear()})
              </span>
            </div>
            
            <p className='text-xs line-clamp-2 text-gray-200'>
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;