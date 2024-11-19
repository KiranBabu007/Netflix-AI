import React from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {
  
    const getVideo =async()=>{
        const res = fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', API_OPTIONS)
        const json =await res.json();

        const trailer =json.results.filter(video=> video.type === 'Trailer')[0];
        
    }

    useEffect(()=>{
        getVideo();
    },[])


  return (
    <div>
      
    </div>
  )
}

export default VideoBackground
