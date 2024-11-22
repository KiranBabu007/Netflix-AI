import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useNowPlayingMovies, usePopularMovies, useUpcomingMovies, useTopRatedMovies } from './hooks';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <div className="hidden md:block">
        <MainContainer />
      </div>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
