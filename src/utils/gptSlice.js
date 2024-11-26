import { createSlice } from "@reduxjs/toolkit"


const gptSlice= createSlice({
    name:'gpt',
    initialState: {
        showGPTSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleSearch:(state)=>{
            state.showGPTSearch=!state.showGPTSearch
        },
        addGptMovies:(state,action)=>{
            const { movieNames, movieResults } = action.payload
            state.movieNames=movieNames
            state.movieResults=movieResults
        }
        
    }
    
})

export const {toggleSearch,addGptMovies}=gptSlice.actions
export default gptSlice.reducer

