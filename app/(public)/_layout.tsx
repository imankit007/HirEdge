import { Stack } from "expo-router"




const Public = () => {


    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="welcome" />
            <Stack.Screen name="login" />
        </Stack>
    )

}

export default Public;