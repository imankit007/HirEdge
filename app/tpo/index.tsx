import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

const TPOPage = () => {


    return (
        <SafeAreaView style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
            }}> TPO Home Page</Text>
            <Button mode='contained' onPress={() => {
                router.push('/(public)/welcome')
            }}>Logout</Button>
        </SafeAreaView>
    )
}


export default TPOPage;