import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  
  const movies = useSelector(state => state.movies);
  
  return (
    <div className='bg-black'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}  />
      <MovieList title={"Recently Added"} movies={movies?.nowPlayingMovies}  />
      <MovieList title={"Mystery Thriller"} movies={movies?.nowPlayingMovies}  />
      <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}  />
    </div>
  )
}

export default SecondaryContainer
