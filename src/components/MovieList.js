import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({ title, movies }) => {
  if (!movies) return null
  return (
    <div className='px-6'>
      <h1 className='text-2xl md:text-3xl py-4 md:py-6 text-white font-bold'>{title}</h1>
      <div className='relative'>
        <div className='flex overflow-x-auto no-scrollbar'>
          <div className='flex gap-4 pb-4'>
            {movies?.map(movie => 
              <Moviecard 
                img={movie.poster_path} 
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
