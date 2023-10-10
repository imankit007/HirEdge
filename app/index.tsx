import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Login } from '../components/screens/login';
import  Header  from '../components/header/header';
import Footer from '../components/footer/footer';

const StartPage = () => {
    return (
        <SafeAreaView style={{
            height: '100%'
        }}>
            <Header />
            <Login />
            <Footer />
        </SafeAreaView >
    )
}

export default StartPage;