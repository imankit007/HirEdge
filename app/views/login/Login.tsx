import { View, Text } from "react-native";

import { Input, Button } from '@rneui/themed';

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {

    const [usn, setUsn] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FFFD8C',
                alignItems: 'center'
            }}
        >
            <Text style={{
                color: 'black',
                fontSize: 40,
            }}>{'Login window'}</Text>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    width: "100%",
                    justifyContent: 'center',
                    rowGap: 10,
                }}
            >
                <Input
                    placeholder="Enter USN"
                    placeholderTextColor={"grey"}
                    style={{
                        color: 'black',
                        backgroundColor: 'white',
                        width: '80%',
                        fontSize: 25,
                    }}
                    value={usn}
                    onChangeText={(value) => { setUsn(value) }}
                />
                <Input
                    placeholder="Enter Password"
                    placeholderTextColor={"grey"}
                    style={{
                        color: 'black',
                        backgroundColor: 'white',
                        width: '80%',
                        fontSize: 25,
                    }}
                    value={password}
                    secureTextEntry
                    onChangeText={(value) => { setPassword(value) }}

                />
                <Button
                    title="Login"
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
                        borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                    }}
                    onPress={() => {
                        console.log(usn);
                        console.log(password);
                    }
                    }
                />
            </View>
        </View>
    )
}

export default Login;