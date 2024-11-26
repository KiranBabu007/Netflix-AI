import { createSlice } from "@reduxjs/toolkit"


const gptSlice= createSlice({
    name:'gpt',
    initialState: {
        showGPTSearch:false,
        movieNames:[],
        movieResults:[]
    },
    reducers:{
        toggleSearch:(state)=>{
            state.showGPTSearch=!state.showGPTSearch
        },
        addGptMovies:(state,action)=>{
            const { movieNames, movieResults } = action.payload
        }
        
    }
    
})

export const {toggleSearch,addGptMovies}=gptSlice.actions
export default gptSlice.reducer

