import { Link } from 'expo-router';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Login } from '../components/screens/login';

const StartPage = () => {
    return (
        <SafeAreaView style={{
            height: '100%'
        }}>
            <Login />
        </SafeAreaView >
    )
}

export default StartPage

const styles = StyleSheet.create({})