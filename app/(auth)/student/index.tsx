
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useLogout from "../../../utils/useLogout";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const StudentPage = () => {

    const router = useRouter();

    const logout = useLogout();

    return (
        <SafeAreaView style={{
            flex: 1,
            width: '100%',
            height: '100%',
            flexDirection: 'column'
        }}>
            <View style={{
                bottom: 0
            }}>

                <Button
                    mode="outlined"
                    icon={() => <FontAwesome5 name="key" size={24} color="black" />}
                    labelStyle={[styles.ButtonLabel, { color: 'blue' }]}
                >Change Password</Button>


            </View>


            <View style={styles.logoutButtonContainer}>
                <Button
                    mode='outlined'
                    onPress={logout}
                    icon={() => <MaterialCommunityIcons name="logout" size={24} color="black" />}
                    labelStyle={[styles.ButtonLabel, { color: 'red' }]}
                    style={styles.logoutButton}
                >
                    Logout
                </Button>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    logoutButtonContainer: {
        width: '100%',
    }, logoutButton: {

    },
    ButtonLabel: {
        fontSize: 20,
        verticalAlign: 'middle',
    }
})

export default StudentPage;
