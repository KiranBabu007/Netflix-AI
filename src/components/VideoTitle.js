import React from "react";
import play from "../assets/play.svg";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="absolute pt-[20%] w-screen h-screen px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/6">{desc}</p>
      <div className="flex">
        <button className="hover:opacity-80 p-2 px-10 bg-white text-black text-lg rounded-md flex items-center">
          <img src={play}  alt="Play Icon" className=" h-6 mr-2 opacity-100" />
          Play
        </button>
        <button className=" hover:opacity-80 mx-2 bg-white p-2 px-10 text-black text-lg opacity-55 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
