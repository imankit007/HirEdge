
import { Slot, Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import { View, Text } from 'react-native'

import { Drawer } from 'expo-router/drawer';

const Layout = () => {


    return (

        <>

            <Drawer screenOptions={{
                headerTitleAlign: 'center',
                // headerTitle: ({}) => (<></>)

            }} >

                <Drawer.Screen
                    name='index'
                    options={{
                        title: "Profile",
                        drawerLabel: "Profile"
                    }}
                />

                <Drawer.Screen
                    name='addcompany'
                    options={{
                        title: "Add Company",
                        drawerLabel: "Add Company"
                    }}
                />

            </Drawer>

        </>
    )



}

export default Layout;