

import { Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { Icon } from 'react-native-paper';



const Layout = () => {


    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: () => {
                        return (
                            <Icon source={"account"} size={20} />
                        )
                    },
                    headerShown: true,
                    headerTitle: "Profile"
                }}
            />
            <Tabs.Screen
                name='placements'
                options={{
                    tabBarIcon: () => (<Text>Placements</Text>),
                    headerTitle: "Placements"
                }}
            />
        </Tabs>
    )
}

export default Layout;

