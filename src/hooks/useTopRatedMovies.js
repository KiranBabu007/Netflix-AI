import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from '../utils/constants';

const useTopRatedMovies = ()=>{
    const topRatedMovies= useSelector((state) => state.movies.topRatedMovies);
    const dispatch = useDispatch();
    const getTopRatedMovies = async () =>{
    
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);

    const json=await data.json();

    dispatch(addTopRatedMovies(json.results));
    
  }

  useEffect(() => {
    !topRatedMovies&&getTopRatedMovies();
  },[])
}

export default useTopRatedMovies;