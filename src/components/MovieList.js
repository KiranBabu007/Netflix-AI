import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({title,movies}) => {
    console.log(movies?.[0]?.poster_path)
  return (
    
    <div className=' text-white'>
        <h1 className='text-3xl py-6'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex '>
            {movies.map(movie => <Moviecard img={movie.poster_path} key={movie.id} />)}
        </div>
     </div>
    </div>
  )
}

export default MovieList
