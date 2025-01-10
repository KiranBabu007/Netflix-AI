import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({ title, movies }) => {
  if (!movies) return null
  return (
    <div className='px-6 mt-8'>
      <h1 className='text-4xl md:text-5xl py-4 md:py-6 text-white font-light font-bebas tracking-wide '>
        {title}
      </h1>
      <div className='relative pb-4'>
        <div className='flex overflow-x-auto no-scrollbar'>
          <div className='flex gap-4 pb-4'>
            {movies?.map(movie => 
              <Moviecard 
                movieData={movie} 
                key={movie.id} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieList
