import { configureStore } from "@reduxjs/toolkit";
import loginPageReducer from '../views/login/Login';

const store = configureStore({
    reducer : {
        loginPage: loginPageReducer
    }
})



export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch