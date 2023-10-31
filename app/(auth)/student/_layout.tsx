

import { Text, View } from 'react-native';
import { Tabs } from 'expo-router';



const Layout = () => {


    return (
        <Tabs

            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: () => {
                        return (
                            <View><Text>Profile</Text></View>
                        )
                    }
                }}
            />

        </Tabs>

    )
}

export default Layout;

