import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import { router } from 'expo-router'
import api from '../../utils/axios';
export const Login = () => {

    const [error, setError] = useState<string | null>(null);

    const [role, setRole] = useState('');
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async () => {
        await api.post('/login', {
            role: role,
            userid: userid,
            password: password
        }).then((res) => {
            if (res.status == 200) {
                router.push('/student/');
            }
        }).catch((error) => {
            if (error.response) {
                if (error.response.status == 401) {
                    setError(error.response.data.message);
                }
            }
        })
    }

    useEffect(() => {
        setError(null);

    }, [userid, password])


    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>Login Page</Text>
            <View style={styles.formBox}>
                <View style={{
                    // flex: 1,
                    marginTop: 10,
                    marginBottom: 40,
                    flexDirection: 'row',
                    justifyContent: "space-around",
                    backgroundColor: '#E5CFF7',
                    borderRadius: 25,
                }}>
                    <RadioButton.Item
                        position="leading"
                        label="Student"
                        value="student"
                        status={role == "student" ? 'checked' : 'unchecked'}
                        onPress={() => setRole('student')} />
                    <RadioButton.Item
                        position="leading"
                        label="TPO"
                        value="tpo"
                        status={role == "tpo" ? 'checked' : 'unchecked'}
                        onPress={() => setRole('tpo')} />
                    <RadioButton.Item
                        position="leading"
                        label="HOD"
                        value="hod"
                        status={role == "hod" ? 'checked' : 'unchecked'}
                        onPress={() => setRole('hod')} />
                    <RadioButton.Item
                        position="leading"
                        label="Alumni"
                        value="alumni"
                        status={role == "alumni" ? 'checked' : 'unchecked'}
                        onPress={() => setRole('alumni')} />
                </View>

                <TextInput
                    placeholder="Enter User ID"
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginBottom: 10,
                        width: '95%',
                        alignSelf: 'center',
                        fontSize: 18,
                        backgroundColor: "white"
                    }}
                    value={userid}
                    onChangeText={(value) => setUserid(value)}
                />
                <TextInput
                    placeholder="Enter Password"
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        width: '95%',
                        alignSelf: 'center',
                        fontSize: 18,
                        backgroundColor: 'white',
                    }}
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                />
                {error && <Text style={{
                    color: 'red',
                    alignSelf: 'center',

                }}> {error}</Text>}
                <Button mode="contained" style={{
                    width: '50%',
                    alignSelf: 'center',
                    marginTop: 15
                }}
                    onPress={() => {
                        handleSubmit();
                    }}
                >
                    Log In
                </Button >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height:400
    },
    mainHeading: {
        fontSize: 20,
    }
    , formBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
    },
    radioGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})