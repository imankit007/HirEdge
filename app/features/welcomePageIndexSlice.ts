
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";


interface welcomePageIndex {
    value: number
}

const initialState : welcomePageIndex = {
    value: 0,
}

export const welcomePageIndexSlice = createSlice({
    name: 'welcomePageIndex',
    initialState,
    reducers:{
        setvalue:(state,action)=> {
            state.value = action.payload;
        }
    }
})

export const selectWelcomePageIndex = (state: RootState )=> state.welcomePageIndex?.value;

export const {setvalue} = welcomePageIndexSlice.actions;

export default welcomePageIndexSlice.reducer;