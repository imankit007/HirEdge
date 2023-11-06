
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useLogout from "../../../utils/useLogout";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import JobCard from "../../../components/Job-Card/JobCard";
import BottomNav from "../../../components/BottomNav/BottomNav";


const StudentPage = () => {

    const router = useRouter();

    const logout = useLogout();

    const upcoming_data = {
        1:{
            name:"Extreme Networks",
            img:"../../../assets/images/job-logos/extreme.png"
        },
        2:{
            name:"Nextuple",
            img:"../../assets/images/job-logos/nextuple.png"
        },
        3:{
            name:"Oracle",
            img:"../../assets/images/job-logos/oracle.png"
        }
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            width: '100%',
            height: '100%',
            flexDirection: 'column'
        }}>
            {/* <View style={{
                bottom: 0
            }}>

                <Button
                    mode="outlined"
                    icon={() => <FontAwesome5 name="key" size={24} color="black" />}
                    labelStyle={[styles.ButtonLabel, { color: 'blue' }]}
                >Change Password</Button>

            </View> */}


            <View style={styles.logoutButtonContainer}>
                {/* <Button
                    mode='outlined'
                    onPress={logout}
                    icon={() => <MaterialCommunityIcons name="logout" size={24} color="black" />}
                    labelStyle={[styles.ButtonLabel, { color: 'red' }]}
                    style={styles.logoutButton}
                >
                    Logout
                </Button> */}
                {/* <JobCard name="Extreme Networks"/> */}
                <BottomNav/>
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
