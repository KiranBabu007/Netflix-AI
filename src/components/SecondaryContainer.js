import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black absolute w-screen pl-12 ">
        <div className="mt-60 md:-mt-40 relative z-20 overflow-hidden ">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies?.topRatedMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upcomingMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        </div>
        <Footer/>
      </div>
    )
  );
};

export default SecondaryContainer;
