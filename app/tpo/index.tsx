import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
            }}> landing Page</Text>
        </SafeAreaView>
    )
}


export default TPOPage;