import React, { useRef } from "react";
import { generateText } from "ai";

import { createGroq } from "@ai-sdk/groq";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchbar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const groq = createGroq({
    apiKey: process.env.REACT_APP_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const searchMovieTMDB = async (movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1', API_OPTIONS)

      const json = await data.json()

      return json.results
  }

  const handleGPTSearch = async () => {
    const prompt = `
  You are an expert AI assistant for a Netflix-like platform. A user will provide a query containing details such as genre, language, and the number of movie recommendations they want.

  **Task**: Extract the relevant movie names based on the user query and return them as a **comma-separated list**. Ensure the recommendations are high-quality, relevant, and contain at least five options. If no specific genre, language, or count is mentioned, default to suggesting five popular movies across all genres and languages.

  **Example Input**:
  "Suggest 5 comedy Hindi movies."

  **Expected Output**:
  Andaz Apna Apna, Hera Pheri, Munna Bhai MBBS, Chupke Chupke, Golmaal

  **Important Notes**:
  - Only output the movie names in a comma-separated format with no additional text.
  - Provide tailored, highly-rated options based on the details provided in the query.

  User query: "${searchText.current.value}"
`;

    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: prompt,
    });
    const GptMovies = text.split(",").map((movie) => movie.trim());
    
    const movieArray = GptMovies.map((movie)=>searchMovieTMDB(movie))

    const tmdbMovies = await Promise.all(movieArray)

    dispatch(addGptMovies({ movieNames: GptMovies, movieResults: tmdbMovies }));

  }
  return (
    <div className="flex p-[8%] justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          onClick={handleGPTSearch}
          className="col-span-3 py-2 m-4 px-4 text-white rounded-lg bg-red-600 hover:bg-red-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
