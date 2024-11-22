import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black absolute mt-0">
        <div className="-mt-40 pl-12 relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList
            title={"Recently Added"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList
            title={"Mystery Thriller"}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
