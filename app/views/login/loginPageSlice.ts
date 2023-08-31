import type { RootState } from "../../store"
import { createSlice } from "@reduxjs/toolkit"

type loginPage = {
    usn: string
    password:string
}


const initialState : loginPage = {
    usn: '',
    password: ''
}

export const loginPageSlice = createSlice({
    name: 'loginPage',
    initialState,
    reducers: {
        setUsn: (state, action)=>{
            state.usn = action.payload;
        },
        setPassword: (state, action)=>{
            state.password = action.payload;
        }
    }
})


export const selectUsn = (state: RootState)=> state.loginPage;

export const { setUsn, setPassword} = loginPageSlice.actions;

export default loginPageSlice.reducer;