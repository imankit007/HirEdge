
import { View, ActivityIndicator, StyleSheet } from "react-native";

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