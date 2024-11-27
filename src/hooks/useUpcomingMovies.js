import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from '../utils/constants';

const useUpcomingMovies = ()=>{
    const upcomingMovies= useSelector((state) => state.movies.upcomingMovies)
    const dispatch = useDispatch();
    const getUpcomingMovies = async () =>{
    
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);

    const json=await data.json();

    dispatch(addUpcomingMovies(json.results));
    
  }

  useEffect(() => {
    upcomingMovies&&getUpcomingMovies();
  },[])
}

export default useUpcomingMovies;