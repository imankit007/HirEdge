import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image } from "react-native";
import api from '../../utils/axios';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { Formik } from "formik";
import * as Yup from 'yup';

import { save } from '../../utils/useSecureStore';
import { useAuth } from "../../utils/AuthContext";
import { CheckBox } from "@rneui/base";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "@rneui/themed";
import { SegmentedButtons } from "react-native-paper";
import { useState } from "react";


const SignInSchema = Yup.object().shape({
    user_id: Yup.string().required("Required").trim(),
    role: Yup.string().required("Required"),
    password: Yup.string().required("Required").trim(),
})




const Login = ({ navigation }: StackScreenProps<RootStackParamList, 'Login'>) => {

    const { setAuthState } = useAuth();

    const [role, setRole] = useState<string>('');

    return (
        <View style={{
            flex: 1,
        }}>
            <Header />
            <View style={{
                flex: 1
            }}>

                <ScrollView>
                    <KeyboardAvoidingView enabled>
                        <Text style={styles.login_head}>Opening The Doors To Success</Text>
                            <Image
                                source={require('../../../assets/images/success-removebg-preview.png')}
                                style={{
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    width: 194,
                                    height: 200,
                                    alignSelf: 'center',
                                }}
                            />


                            <Formik initialValues={{
                                role: '',
                                user_id: '',
                            password: '',
                        }} 
                            onSubmit={async (values, actions) => {
                                await api.post('/login', values).then((res) => {
                                    if (res.status == 200) {
                                        save('refresh_token', `${res.data?.refresh_token}`);
                                        setAuthState({ access_token: res.data?.access_token, role: res.data?.role })
                                    }
                                }).catch((error) => {
                                    console.log(error);
                                    if (error.response) {
                                        if (error.response.status == 401) {
                                        }
                                    }
                                })
                            }}
                            >
                            {({ values, setFieldValue, handleChange, touched, errors, handleSubmit }) => (<View
                                style={{
                                    flex: 1
                                }}>
                                <SegmentedButtons
                                    value={values.role}

                                    buttons={[
                                        {
                                            value: 'student',
                                            label: 'Student',
                                        }, {
                                            value: 'tpo',
                                            label: 'TPO'
                                        }, {
                                            value: 'alumni',
                                            label: "Almuni"
                                        }, {
                                            value: "hod",
                                            label: "HOD"
                                        }
                                    ]}
                                    onValueChange={(value) => {
                                        setFieldValue('role', value)
                                        setRole(value);
                                    }}
                                />

                                <TextInput
                                        placeholder="Enter User ID"
                                        style={{
                                            // borderBottomColor: 'black',
                                            // borderBottomWidth: 1,
                                            height: 40,
                                            padding: 10,
                                            borderRadius: 10,
                                            marginBottom: 10,
                                            marginTop: 10,
                                            width: '95%',
                                            alignSelf: 'center',
                                            fontSize: 18,
                                            backgroundColor: '#D9D9D9'
                                        }}
                                        value={values.user_id}
                                        onChangeText={handleChange('user_id')}
                                />
                                {(touched.user_id && errors.user_id) && <Text style={styles.errorMsg}> {errors.user_id}</Text>}
                                    <TextInput
                                        placeholder="Enter Password"
                                            style={{
                                            height: 40,
                                            padding: 10,
                                            borderRadius: 10,
                                            marginBottom: 10,
                                            width: '95%',
                                            alignSelf: 'center',
                                            fontSize: 18,
                                            backgroundColor: '#D9D9D9',
                                            marginTop: 10
                                        }}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                            secureTextEntry
                                    />
                                    {
                                        (touched.password && errors.password) && <Text style={styles.errorMsg}> {errors.password}</Text>
                                }
                                <Button
                                    onPress={handleSubmit as any}

                                    type="solid"
                                    color={"primary"}
                                    titleStyle={{
                                        fontSize: 20
                                    }}
                                    buttonStyle={{
                                        borderRadius: 20
                                    }}
                                    containerStyle={{
                                        width: "50%",
                                        alignSelf: 'center',
                                    }}
                                >
                                    Log In
                                </Button>
                            </View>
                            )}
                        </Formik>

                        <View style={{
                            flex: 1
                        }}></View>

                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
            <Button
                                type="solid"
                                style={{
                                    backgroundColor: '#EAD637',

                }}
                containerStyle={{
                                }}
                                color={"warning"}
                                buttonStyle={{
                                    borderRadius: 20,
                                }}
                                onPress={() => {
                                    navigation.goBack();
                }}

            >
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: '#230C0F',
                                    marginBottom: 5
                                }}>Go Back</Text>
            </Button>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    login_head: {
        fontSize: 23,
        marginTop: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    container: {
        width: '100%',
        flex: 1,
    },
    mainHeading: {
        fontSize: 36,
        fontWeight: 'bold'
    }
    , formBox: {
        flex: 1,
        backgroundColor: '#EAD637',
        padding: 10,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, errorMsg: {
        color: 'red'
    }
})

export default Login;