
import { View, Text } from "react-native";
import { Slot, useRouter } from "expo-router";

import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const InitialLayout = () => {

    const router = useRouter();

    useEffect(() => {

        router.replace('/')

    }, [])


    return (
        <Slot />
    )
}



const RootLayout = () => {


    return (
        <SafeAreaView style={{ height: '100%' }}>
            <InitialLayout />
        </SafeAreaView>
    )

}




export default RootLayout;