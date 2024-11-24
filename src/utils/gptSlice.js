import { createSlice } from "@reduxjs/toolkit"


const gptSlice= createSlice({
    name:'gpt',
    initialState: {
        showGPTSearch:false
    },
    reducers:{
        toggleSearch:(state)=>{
            state.showGPTSearch=!state.showGPTSearch
        }
        
    }
    
})

export const {toggleSearch}=gptSlice.actions
export default gptSlice.reducer

