import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black absolute w-screen pl-12 ">
        <div className="-mt-40 relative z-20 overflow-hidden ">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList
            title={"Popular Movies"}
            movies={movies?.popularMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
