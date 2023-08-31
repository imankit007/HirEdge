import { View, Text, Button } from 'react-native'
import { blue } from 'react-native-reanimated';

const Home = ({ navigation }: { navigation: any }) => {

    return (
        <View style={{
            flex: 1,
            marginTop: 50,
        }}>
            <Text style={{
                marginTop: 40,
                color: 'blue',
                fontSize: 40
            }}>This is Home</Text>
            <Button title="Profile"
                onPress={() => {
                    navigation.navigate('Profile')
                }} />
            <View style={{
                margin: 10
            }}></View>
            <Button title="Account"
                onPress={() => {
                    navigation.navigate('Account')
                }} />
        </View>
    )
}

export default Home;