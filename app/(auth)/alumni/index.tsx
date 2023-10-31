import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import useLogout from '../../../utils/useLogout';
import { SafeAreaView } from "react-native-safe-area-context";

const AlumniLandingPage = () => {

    const router = useRouter();
    const logout = useLogout();

    return (
        <SafeAreaView style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
            }}> Alumni Home Page</Text>
            <Button mode='contained' onPress={logout}>Logout</Button>
        </SafeAreaView>
    )
}


export default AlumniLandingPage;