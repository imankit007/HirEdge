
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon, IconButton, Avatar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useLogout from "../../../utils/useLogout";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";

import useAxiosPrivate from "../../../utils/axiosPrivate";

// import BottomNav from "../../../components/BottomNav/BottomNav";

type StudentProfileType = {
    user_id: string;
    branch: string;
    email: string;
    mobile: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    dob: string;
    tenth_percentage: string;
    twelfth_percentage: string;
    ug_cgpa: string;
}


const StudentPage = () => {

    const [studentProfile, setStudentProfile] = useState<StudentProfileType | null>(null)

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {

        const fetchProfile = () => {

            axiosPrivate.get('/student/profile').then((res) => {
                setStudentProfile(res.data);
            })
        }

        fetchProfile();

    }, [])

    const logout = useLogout();

    return (
        <SafeAreaView style={{
            flex: 1,
            width: '100%',
            position: 'fixed',
            rowGap: 5,
            flexDirection: 'column',
            backgroundColor: '#EAD637'
        }}>
            <ScrollView>

                <View style={{
                    flex: 1,
                    rowGap: 10,
                    backgroundColor: '#EAD637',
                    position: 'relative'
                }}>
                    <View style={{
                        top: 10,
                        zIndex: 2,
                        position: "relative"
                    }}>
                        <Avatar.Icon icon={"account-circle-outline"} size={160} style={{
                            alignSelf: 'center'
                        }} />
                        {/* <IconButton icon={'camera-outline'} size={46} iconColor="black" style={{
                            position: 'relative',
                            alignSelf: 'center',
                            bottom: 60, left: 40,
                        }}
                            containerColor="#00a878"
                        /> */}
                    </View>
                    {/* <TouchableOpacity style={styles.buttonConatainer} onPress={logout}>
                        <Button mode="outlined" labelStyle={{
                    fontSize: 20
                }}>Change Password</Button>
                        <Button mode='outlined' onPress={logout} textColor="red" labelStyle={{
                    fontSize: 24
                }}>Logout</Button>
                        <MaterialCommunityIcons name="logout" size={39} color="#ca1313" />
                    </TouchableOpacity> */}

                    <View style={{
                        backgroundColor: '#eee',
                        position: 'relative',
                        flex: 1,
                        top: -20,
                        paddingTop: 20,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 25,
                        width: "98%",
                        alignSelf: 'center',
                        height:600
                    }}>
                        <View style={{
                            width: "100%",
                            flexDirection: 'row',
                            columnGap: 20,
                            padding: 5
                        }}>
                            <Icon source="account" size={40} />
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{}}>Name</Text>
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                    {`${studentProfile?.first_name} ${studentProfile?.middle_name} ${studentProfile?.last_name}`}</Text>
                            </View>
                            <IconButton icon={'pencil'} iconColor="#186F65" style={{

                            }} />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            columnGap: 20,
                            padding: 5,
                            paddingTop: 10
                        }}>
                            <Icon source="email" size={40} />
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{}}>Email</Text>
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                    {studentProfile?.email}
                                </Text>
                            </View>
                            <IconButton icon={'pencil'} iconColor="#186F65" />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            columnGap: 20,
                            padding: 5,
                            paddingTop: 10
                        }}>
                            <Icon source="phone" size={40} />
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{}}>Phone</Text>
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                    {studentProfile?.mobile}
                                </Text>
                            </View>
                            <IconButton icon={'pencil'} iconColor="#186F65" />
                        </View>

                        <View style={{position:'relative', top:20}}>
                            <Text style={{ 
                                alignSelf: 'center', 
                                fontSize: 20, 
                                // textDecorationLine: 'underline',
                                backgroundColor:'#A2D3C2',
                                padding:10,
                                borderRadius:10,
                                fontWeight:"600",
                            }}>
                                Academic Details</Text>
                            <View style={{ flexDirection: "row", marginTop:20 }}>
                                <MaterialIcons name="domain" size={40} />
                                <View style={{ flexDirection: 'column', flex: 1, marginBottom:10 }}>
                                    <Text style={{marginLeft:20}}>Branch</Text>
                                    <Text style={styles.academicDetails}>{studentProfile?.branch}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginBottom:10 }}>
                                <MaterialCommunityIcons name="book-education" size={40} color="black" />
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={{marginLeft:20}}>10th Percentage</Text>
                                    <Text style={styles.academicDetails}>{studentProfile?.tenth_percentage}%</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginBottom:10 }}>
                                <MaterialCommunityIcons name="book-education" size={40} color="black" />
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={{marginLeft:20}}>12th Percentage</Text>
                                    <Text style={styles.academicDetails}>{studentProfile?.twelfth_percentage}%</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginBottom:10 }}>
                                <MaterialCommunityIcons name="book-education" size={40} color="black" />
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={{marginLeft:20}}>UG CGPA</Text>
                                    <Text style={styles.academicDetails}>{studentProfile?.ug_cgpa}%</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Button style={{
                    backgroundColor: 'white', 
                    padding:10,
                    width:150,
                    alignSelf:'center',
                    marginBottom:30
                    }} 
                    onPress={logout}
                ><Text style={{ color: 'red', fontWeight: '800', fontSize: 20 }}>Log Out</Text></Button>

            </ScrollView>
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
        left: 120,
        bottom: 20
    },
    academicDetails: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: "800",
        marginLeft:20
    }
})

export default StudentPage;
