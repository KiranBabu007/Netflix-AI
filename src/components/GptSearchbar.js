import React, { useRef } from "react";
import { generateText } from "ai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
 import { createGroq } from '@ai-sdk/groq';



const GptSearchbar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

 



  const groq = createGroq({
    apiKey: process.env.REACT_APP_GROQ_API_KEY,dangerouslyAllowBrowser: true
  });

  const searchMovieTMDB = async (movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1', API_OPTIONS)

      const json = await data.json()

      return json.results
  }

  const handleGPTSearch = async () => {
    const prompt = `
  Task: Extract relevant movie names based on the user query and return them as a comma-separated list. Provide at least five high-quality options. Default to five popular movies across all genres if no specific criteria are mentioned.

  Rules:

  Output only movie names in a comma-separated format, no extra text.
  Include at least five names. Strictly follow the format and output only movie names.
  Example:
  //
  Input: "Suggest 5 comedy Hindi movies."
  Output: Andaz Apna Apna, Hera Pheri, Munna Bhai MBBS, Chupke Chupke, Golmaal
  //

  Query: "${searchText.current.value}"
  `;

    const { text } = await generateText({
      model: groq('llama-3.1-8b-instant'),
      prompt: prompt,
    });

    
    const cleanedText = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('//'))
      .pop()
      .replace(/(Output:|Here are|Suggested movies:|Movies:)/gi, '')
      .trim();

    const movieNames = cleanedText.split(',').map(movie => movie.trim());
    
    const movieArray = movieNames.map((movie) => searchMovieTMDB(movie));
    const tmdbMovies = await Promise.all(movieArray);
    
    dispatch(addGptMovies({ movieNames: movieNames, movieResults: tmdbMovies }));
  }

  return (
    <div className="pt-[50%] md:pt-0 flex p-2 md:p-[4%] lg:p-[8%] justify-center">
      <form
        className="w-[90%] md:w-[70%] lg:w-1/2 bg-black grid grid-cols-12 rounded-lg bg-opacity-50"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 md:p-4 m-2 md:m-4 col-span-12 md:col-span-9 rounded"
          type="text"
          placeholder="Describe what you like to watch today?"
        />
        <button
          onClick={handleGPTSearch}
          className="col-span-12 font-bold md:col-span-3 py-2 mx-2 mb-2 md:m-4 px-4 text-white rounded-lg bg-red-600 hover:bg-red-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
