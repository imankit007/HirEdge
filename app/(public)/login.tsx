import { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Button } from "react-native";

import { RadioButton } from "react-native-paper";
import { router } from 'expo-router'
import api from '../../utils/axios';
import SdmcetImage from "../../components/common/sdmcetImage/sdmcetImage";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { Formik } from "formik";
import * as Yup from 'yup';

import { save } from '../../utils/useSecureStore';

import { AuthContext } from "../../utils/AuthContext";

const SignInSchema = Yup.object().shape({
    user_id: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
})


const Login = () => {

    const { setAuthState } = useContext(AuthContext);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <Header />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={{
                    backgroundColor: '#fff',
                }} contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <SdmcetImage />
                    <Text style={styles.mainHeading}>Login Page</Text>
                    <Formik initialValues={{
                        role: '',
                        user_id: '',
                        password: ''
                    }}
                        validationSchema={SignInSchema}
                        onSubmit={async (values, actions) => {
                            console.log(values)
                            await api.post('/login', values).then((res) => {
                                if (res.status == 200) {
                                    if (values.role == 'student') {
                                        router.replace('/(auth)/student/');
                                    }
                                    if (values.role == 'tpo') {
                                        router.replace('/(auth)/tpo/');
                                    }
                                    if (values.role == 'hod') {
                                        router.replace('/(auth)/hod/')
                                    }
                                    if (values.role == 'alumni') {
                                        router.replace('/(auth)/alumni/')
                                    }
                                    save('refresh_token', `${values.role} ${res.data?.refresh_token}`);
                                    setAuthState({ access_token: res.data?.access_token, role: res.data?.role })
                                }
                            }).catch((error) => {
                                if (error.response) {
                                    if (error.response.status == 401) {
                                    }
                                }
                            })
                        }}
                    >

                        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched, setFieldTouched }) =>

                        (
                            <>
                                <View style={styles.formBox}>
                                    <View style={{
                                        marginVertical: 10,
                                        flexDirection: 'row',
                                        justifyContent: "space-evenly",
                                        backgroundColor: '#E5CFF7',
                                        borderRadius: 25,
                                    }}>
                                        <RadioButton.Item
                                            position="leading"
                                            label="Student"
                                            value="student"
                                            status={values.role == "student" ? 'checked' : 'unchecked'}
                                            onPress={() => setFieldValue('role', 'student')} />
                                        <RadioButton.Item
                                            position="leading"
                                            label="TPO"
                                            value="tpo"
                                            status={values.role == "tpo" ? 'checked' : 'unchecked'}
                                            onPress={() => setFieldValue('role', 'tpo')} />
                                        <RadioButton.Item
                                            position="leading"
                                            label="HOD"
                                            value="hod"
                                            status={values.role == "hod" ? 'checked' : 'unchecked'}
                                            onPress={() => setFieldValue('role', 'hod')} />
                                        <RadioButton.Item
                                            position="leading"
                                            label="Alumni"
                                            value="alumni"
                                            status={values.role == "alumni" ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                setFieldTouched('role', false);
                                                setFieldValue('role', 'alumni')
                                            }} />
                                    </View>
                                    {
                                        errors.role && <Text style={styles.errorMsg}>{errors.role}</Text>
                                    }
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
                                        value={values.user_id}
                                        onChangeText={handleChange('user_id')}
                                    />
                                    {(touched.user_id && errors.user_id) && <Text style={styles.errorMsg}> {errors.user_id}</Text>}
                                    <TextInput
                                        placeholder="Enter Password"
                                        style={{
                                            borderBottomColor: 'black',
                                            borderBottomWidth: 1,
                                            width: '95%',
                                            alignSelf: 'center',
                                            fontSize: 18,
                                            backgroundColor: 'white',
                                            marginVertical: 5,
                                        }}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                    />
                                    {
                                        (touched.password && errors.password) && <Text style={styles.errorMsg}> {errors.password}</Text>
                                    }

                                    <Button
                                        title="Log In"
                                        onPress={handleSubmit as any}
                                    />

                                </View>
                            </>
                        )
                        }
                    </Formik>



                </ScrollView>
            </KeyboardAvoidingView >
            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                }}
                onPress={() => {
                    router.replace('/welcome')
                }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'lightblue', marginBottom: 5
                }}>Go Back</Text>
            </TouchableOpacity>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
    },
    mainHeading: {
        fontSize: 36,
        fontWeight: 'bold'
    }
    , formBox: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, errorMsg: {
        color: 'red'
    }
})

export default Login;