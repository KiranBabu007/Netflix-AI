import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggestions = () => {

  const { movieNames,movieResults } = useSelector((state) => state.gpt)

  if(!movieNames) return null


  return (
    <div className='bg-black bg-opacity-70 p-4 m-4 text-white'>
      <div className='m-4'>
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  )
}

export default GptSuggestions
