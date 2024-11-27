import React, { useRef } from "react";
import { generateText } from "ai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
 import { createGoogleGenerativeAI } from '@ai-sdk/google';

const GptSearchbar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

 

  const google = createGoogleGenerativeAI({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,dangerouslyAllowBrowser: true
  });

  const searchMovieTMDB = async (movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1', API_OPTIONS)

      const json = await data.json()

      return json.results
  }

  const handleGPTSearch = async () => {
    const prompt = `
  You are an expert AI assistant for a Netflix-like platform. A user will provide a query regarding anything related to movie.

  **Task**: Extract the relevant movie names based on the user query and return them as a **comma-separated list**. Ensure the recommendations are high-quality, relevant, and contain at least five options. If no specific genre, language, or count is mentioned, default to suggesting five popular movies across all genres and languages.

  **Example Input**:
  "Suggest 5 comedy Hindi movies."

  **Expected Output**:
  Andaz Apna Apna, Hera Pheri, Munna Bhai MBBS, Chupke Chupke, Golmaal

  **Example Input**:
  "Malayalam Horror"

  **Expected Output**:
  Ezra,In Ghost House Inn,Pretha,Anandabhadram,Manichitrathazhu

  **Important Notes**:
  - Only output the movie names in a comma-separated format with no additional text.
  - No other information should be included in the output. regarding context or the user query.
  - The output should be a list of movie names separated by commas.
  - The output should contain at least five movie names.
  - The output shouldnt have introduction or conclusion text.
  

  User query: "${searchText.current.value}"
`;

const { text } = await generateText({
  model: google('gemini-1.5-pro-latest'),
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
