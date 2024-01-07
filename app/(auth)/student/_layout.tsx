

import { Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { Icon } from 'react-native-paper';
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';




const Layout = () => {


    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor:"#A2D3C2",
                    padding: 10,
                    paddingBottom: 20,
                    height:65,
                    paddingTop:20,
                    // borderRadius:20,
                    // marginBottom:15,
                    width: "100%",
                    alignSelf:'center'
                },
            }}
        >
            <Tabs.Screen
                name='placements'
                options={{
                    tabBarIcon: () => {
                        return (
                            <FontAwesome name='briefcase' size={30} />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarIcon: () => {
                        return (
                            <Icon source={require('../../../assets/images/icons/profile-icon.png')} size={30} />
                        )
                    }
                }}
            />

            <Tabs.Screen
                name='(drive)/[drive]'
                options={{
                    href: null
                }}
            />


        </Tabs>

    )
}

export default Layout;

