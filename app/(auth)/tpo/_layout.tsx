
import { Slot, Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer';

import { useEffect } from 'react';



const Layout = () => {



    return (

        <>

            <Drawer
                initialRouteName='addstudent'
                screenOptions={{
                    headerTitleAlign: 'center',
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

                <Drawer.Screen
                    name='addstudent'
                    options={{
                        title: "Add Student",
                        drawerLabel: "Add Student"
                    }}
                ></Drawer.Screen>

            </Drawer>

        </>
    )



}

export default Layout;