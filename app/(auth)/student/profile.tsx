
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Button, Icon, IconButton, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useLogout from "../../../utils/useLogout";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import JobCard from "../../../components/JobCard/JobCard";
// import BottomNav from "../../../components/BottomNav/BottomNav";

const StudentPage = () => {

    const router = useRouter();

    const logout = useLogout();

    const hello = () => { console.log("Hello world") }

    const upcoming_data = {
        1: {
            name: "Extreme Networks",
            img: "../../../assets/images/job-logos/extreme.png"
        },
        2: {
            name: "Nextuple",
            img: "../../assets/images/job-logos/nextuple.png"
        },
        3: {
            name: "Oracle",
            img: "../../assets/images/job-logos/oracle.png"
        }
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            width: '100%',
            position: 'fixed',
            rowGap: 5,
            flexDirection: 'column',
            backgroundColor: '#EAD637'
        }}>

            <View style={{
                flex: 1,
                rowGap: 10,
                backgroundColor: '#EAD637'
            }}>
                <View style={{
                    top: 40,
                    zIndex:2
                }}>
                    <Avatar.Icon icon={"account-circle-outline"} size={160} style={{
                        alignSelf: 'center'
                    }} />
                    <IconButton icon={'camera-outline'} size={46} iconColor="black" style={{
                        position: 'relative',
                        alignSelf: 'center',
                        bottom: 60, left: 40,
                    }}
                        containerColor="#00a878"
                    />
                </View>
                <TouchableOpacity style={styles.buttonConatainer} onPress={logout}>
                    {/* <Button mode="outlined" labelStyle={{
                    fontSize: 20
                }}>Change Password</Button> */}
                    {/* <Button mode='outlined' onPress={logout} textColor="red" labelStyle={{
                    fontSize: 24
                }}>Logout</Button> */}
                    <MaterialCommunityIcons name="logout" size={39} color="#ca1313" />
                </TouchableOpacity>

                <View style={{
                    backgroundColor:'#fff',
                    height:950,
                    paddingTop:40,
                    paddingLeft:15,
                    paddingRight:15,
                    bottom:130,
                    borderRadius:25,
                    width:"98%",
                    alignSelf:'center'
                }}>
                    <View style={{
                        width: "100%",
                        flexDirection: 'row',
                        columnGap: 20,
                        padding:5
                    }}>
                        <Icon source="account" size={40} />
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={{}}>Name</Text>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>Mr. ABC</Text>
                        </View>
                        <IconButton icon={'pencil'} iconColor="#186F65" style={{

                        }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        columnGap: 20,
                        padding:5,
                        paddingTop:10
                    }}>
                        <Icon source="email" size={40} />
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={{}}>Email</Text>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>xyz@abc.com</Text>
                        </View>
                        <IconButton icon={'pencil'} iconColor="#186F65" />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        columnGap: 20,
                        padding:5,
                        paddingTop:10
                    }}>
                        <Icon source="phone" size={40} />
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={{}}>Phone</Text>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>+91 12345 12345</Text>
                        </View>
                        <IconButton icon={'pencil'} iconColor="#186F65" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    informationText: {
        fontSize: 24,
    },
    buttonConatainer: {
        position: 'relative',
        marginBottom: 5,
        rowGap: 5,
        alignSelf: "center",
        left: 150,
        bottom: 210
    }
})

export default StudentPage;
