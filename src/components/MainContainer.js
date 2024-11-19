import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movies =useSelector(state => state.movies?.nowPlayingMovies);
    if (!movies) return;
    const mainMovies= movies[0]

    const {original_title, overview} = mainMovies;


  return (
    <div>
      <VideoTitle title={original_title} desc={overview} />
      <VideoBackground />
    </div>
  )
}

export default MainContainer
