import { View, Text, TextInput, Button } from "react-native";


const Login = () => {


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
                <TextInput
                    placeholder="Enter USN"
                    placeholderTextColor={"grey"}
                    style={{
                        color: 'black',
                        backgroundColor: 'white',
                        width: '80%',
                        fontSize: 25,
                    }}

                />
                <TextInput
                    placeholder="Enter Password"
                    placeholderTextColor={"grey"}
                    style={{
                        color: 'black',
                        backgroundColor: 'white',
                        width: '80%',
                        fontSize: 25,
                    }}
                />
                <Button
                    title="Login"

                />
            </View>
        </View>
    )
}

export default Login;