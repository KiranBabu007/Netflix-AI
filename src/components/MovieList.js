import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({ title, movies }) => {
  console.log(movies?.[0]?.poster_path)
  return (
    <div className='w-screen '>
      <h1 className='text-3xl py-6 text-white font-bold'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex space-x-2'>
          {movies.map(movie => <Moviecard img={movie.poster_path} key={movie.id} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList
