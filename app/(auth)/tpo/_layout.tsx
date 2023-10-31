
import { Slot, Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import { View, Text } from 'react-native'

const Layout = () => {


    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >

            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: () => {
                        return (
                            <AntDesign name='user' size={24} selectionColor={'blue'} selectable />
                        )
                    }
                }}
            />

            <Tabs.Screen
                name='FirstPage'
                options={{
                    tabBarIcon: () => (<View><Text style={{ fontSize: 20 }}>1</Text></View>)
                }}
            />

        </Tabs>
    )

}

export default Layout;