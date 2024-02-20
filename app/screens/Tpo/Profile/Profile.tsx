import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from '@rneui/base'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { Button } from '@rneui/themed'

const Profile = () => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ['TPOProfile'],
        queryFn: (): Promise<TPOProfile> => (
            api.get('/tpo/profile').then(res => res.data)
        ),
        enabled: true
    })


    if (result.isLoading) {
        <View><Text> Loading....</Text></View>
    }


    if (result.isSuccess)
    return (
        <View style={styles.mainContainer}>
            <ScrollView
                contentContainerStyle={{

                    paddingVertical: 20
                }}
                style={{
                    position: 'relative',
                }}
            >
                <Avatar title='T'
                    size={200}
                    rounded
                    containerStyle={{
                        backgroundColor: "purple",
                        alignSelf: 'center'
                    }}
                    titleStyle={{
                        fontSize: 180
                    }}
                />

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>First Name</Text>
                    <Text style={styles.fieldValue}>{result.data?.first_name}</Text>
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Middle Name</Text>
                    <Text style={styles.fieldValue}>{result.data?.middle_name}</Text>
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Last Name</Text>
                    <Text style={styles.fieldValue}>{result.data.last_name}</Text>
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Email</Text>
                    <Text style={styles.fieldValue}>{result.data.email}</Text>
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldName}>Mobile</Text>
                    <Text style={styles.fieldValue}>{result.data.mobile}</Text>

                </View>


                <View>  

                    <Button title={"Change Password"} color={'warning'} containerStyle={{

                    }} />


                    <Button title={"Logout"} color={'error'} containerStyle={{

                    }} />

                </View>




            </ScrollView>
        </View>
    )
    return null;
}

export default Profile

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    fieldName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    fieldValue: {
        fontSize: 24
    },
    fieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowColor: 'black',
        margin: 10,
        elevation: 20
    }
})