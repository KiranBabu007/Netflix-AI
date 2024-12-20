import React from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-screen h-screen -z-10">
  {/* Video Background */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black  overflow-hidden ">
    <iframe
      className="absolute top-[-60px] left-0 w-full h-[calc(100%+120px)] pointer-events-none "
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1&showinfo=0&rel=0&loop=1&playlist="+trailerVideo?.key
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media;"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

</div>


  );
};

export default VideoBackground;
