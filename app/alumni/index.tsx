import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const AlumniLandingPage = () => {

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
            }}> ALumni Landing Page</Text>
            <Button mode='contained' onPress={() => {
                router.push('/')
            }}>Logout</Button>
        </SafeAreaView>
    )
}


export default AlumniLandingPage;