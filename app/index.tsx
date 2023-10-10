import { Link } from 'expo-router';
import React from 'react';


import { Login } from '../components/screens/login';
import Welcome from './welcome';

const StartPage = () => {
    return (
        <>
            <Login />
            {/* <Welcome /> */}
        </ >
    )
}

export default StartPage;