
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";

import { Button, Icon } from "@rneui/base";
import useLogout from "../../../utils/useLogout";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../utils/axiosPrivate";


type StudentProfileDataType = {
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



const StudentProfile = () => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchresult.data"],
        queryFn: (): Promise<StudentProfileDataType> => (
            api.get('/student/profile').then(res => res.data)
        )
    })

    const logout = useLogout();

    return (
        <>
            {result.isSuccess && <View style={{
                flex: 1,
                width: '100%',
                rowGap: 5,
                flexDirection: 'column',
            }}>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        rowGap: 10,
                        position: 'relative'
                    }}>
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
                            height: 600
                        }}>
                            <View style={{
                                width: "100%",
                                flexDirection: 'row',
                                columnGap: 20,
                                padding: 5
                            }}>
                                <Icon name="account-circle" size={40} />
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={{}}>Name</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                        {`${result.data.first_name} ${result.data.middle_name} ${result.data?.last_name}`}</Text>
                                </View>
                                <Icon name={'edit'} />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                columnGap: 20,
                                padding: 5,
                                paddingTop: 10
                            }}>
                                <Icon name="email" size={40} />
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={{}}>Email</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                        {result.data?.email}
                                    </Text>
                                </View>
                                <Icon name={'edit'} />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                columnGap: 20,
                                padding: 5,
                                paddingTop: 10
                            }}>
                                <Icon name="phone" size={40} />
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={{}}>Phone</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                        {result.data?.mobile}
                                    </Text>
                                </View>
                                <Button onPress={() => { }} type="clear"><Icon name={'edit'} /></Button>
                            </View>

                            <View style={{ position: 'relative', top: 20 }}>
                                <Text style={{
                                    alignSelf: 'center',
                                    fontSize: 20,
                                    // textDecorationLine: 'underline',
                                    backgroundColor: '#A2D3C2',
                                    padding: 10,
                                    borderRadius: 10,
                                    fontWeight: "600",
                                }}>
                                    Academic Details</Text>
                                <View style={{ flexDirection: "row", marginTop: 20 }}>
                                    <MaterialIcons name="domain" size={40} />
                                    <View style={{ flexDirection: 'column', flex: 1, marginBottom: 10 }}>
                                        <Text style={{ marginLeft: 20 }}>Branch</Text>
                                        <Text style={styles.academicDetails}>{result.data?.branch}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                    <MaterialCommunityIcons name="book-education" size={40} color="black" />
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{ marginLeft: 20 }}>10th Percentage</Text>
                                        <Text style={styles.academicDetails}>{result.data?.tenth_percentage}%</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                    <MaterialCommunityIcons name="book-education" size={40} color="black" />
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{ marginLeft: 20 }}>12th Percentage</Text>
                                        <Text style={styles.academicDetails}>{result.data?.twelfth_percentage}%</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                    <MaterialCommunityIcons name="book-education" size={40} color="black" />
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{ marginLeft: 20 }}>UG CGPA</Text>
                                        <Text style={styles.academicDetails}>{result.data?.ug_cgpa}%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>}
        </>
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
        marginLeft: 20
    }
})

export default StudentProfile;
