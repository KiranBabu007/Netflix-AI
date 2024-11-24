import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovie';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { toggleSearch } from '../utils/gptSlice';
import { useSelector } from 'react-redux';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const gptToggle = useSelector((state) => state.gpt.showGPTSearch);
  return (
    <div>
      <Header />
      { gptToggle ? <GptSearch /> : (<> <div className="hidden md:block">
        <MainContainer />
      </div>
      <SecondaryContainer /> 
      </>)
     }
    </div>
  );
};

export default Browse;
