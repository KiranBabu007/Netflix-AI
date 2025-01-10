import React from "react";
import play from "../assets/play.svg";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="absolute pt-[18%] w-screen h-screen px-12 text-white bg-gradient-to-tr from-black z-10">
      <h1 className="text-5xl font-bold font-netflix">{title}</h1>
      <p className="py-6 text-md w-2/6">{desc}</p>
      <div className="flex">
        <button className="hover:opacity-80 p-2 px-10 bg-white text-black text-md rounded-md flex items-center">
          <img src={play}  alt="Play Icon" className=" h-6 mr-2 opacity-100" />
          Play
        </button>
        <button className=" hover:opacity-80 mx-2 bg-white p-2 px-10 text-black text-md opacity-55 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
