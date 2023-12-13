

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
                    borderRadius:20,
                    marginBottom:15,
                    width:"94%",
                    alignSelf:'center'
                }
            }}

        >
            
            <Tabs.Screen
                name='placements'
                options={{
                    tabBarIcon: () => {
                        return (
                            <View><FontAwesome name='briefcase' size={30}/></View>
                        )
                    }
                }}
            />
            <Tabs.Screen
                name='chat'
                options={{
                    tabBarIcon: () => {
                        return (
                            <View><Icon source={require('../../../assets/images/icons/message-icon.png')} size={30}/></View>
                        )
                    }
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarIcon: () => {
                        return (
                            <View><Icon source={require('../../../assets/images/icons/profile-icon.png')} size={30}/></View>
                        )
                    }
                }}
            />
        </Tabs>

    )
}

export default Layout;

