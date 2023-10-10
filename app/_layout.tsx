
import { View, Text, ScrollView } from "react-native";
import { Slot, useRouter } from "expo-router";

import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

import { KeyboardAvoidingView } from "react-native";

const InitialLayout = () => {

    const router = useRouter();
    useEffect(() => {
        router.replace('/');
    }, [
    ])

    return (
        <>

            <Slot />

        </>
    )
}



const RootLayout = () => {
    return (
        <InitialLayout />
    )

}




export default RootLayout;