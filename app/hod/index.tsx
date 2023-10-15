import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from 'react-native-paper';

import { useRouter } from "expo-router";
const HodLandingPage = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
            }}> HOD Home Page</Text>

            <Button mode='contained' onPress={() => {
                router.push('/(public)/welcome')
            }}>Logout</Button>
        </SafeAreaView>
    )
}

export default HodLandingPage;