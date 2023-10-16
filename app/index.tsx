import { Link } from 'expo-router';
import React from 'react';
import 

import { Login } from '../components/screens/login';
import Welcome from './welcome';

const StartPage = () => {

    const { authState } = useContext(AuthContext);
    if (authState.authenticated == false)
        return (
            <Redirect href={"/(public)/welcome"} />
        )
    else {


    }

}

export default StartPage;