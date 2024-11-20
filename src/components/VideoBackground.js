import React from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-screen h-screen">
  {/* Video Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <iframe
      className="absolute top-[-60px] left-0 w-full h-[calc(100%+120px)] pointer-events-none"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1&showinfo=0&rel=0"
      }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media;"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

</div>


  );
};

export default VideoBackground;
