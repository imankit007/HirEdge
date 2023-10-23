import { Redirect, useNavigation } from "expo-router"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/AuthContext";

import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import useRefreshToken from "../utils/refresh";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const StartPage = () => {

    return (
        <View style={styles.mainContainer}>
            <ActivityIndicator size={400} color={'blue'} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default StartPage;