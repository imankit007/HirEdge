

import { Text, View } from 'react-native';


import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import StudentDashboard from './Dashboard/Dashboard';
import DrivePage from './Drive/Drive';
import Companies from './Companies/Companies';
import Profile from './Profile/Profile';

import Company from './Company/Company';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@rneui/themed';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import OngoingDrives from './OngoingDrives/OngoingDrives';
import ShareExperience from './ShareExperience/ShareExperience';


const Drawer = createDrawerNavigator<StudentDrawerParamList>();

const StudentLayout = () => {


    return (
        <>
            <Drawer.Navigator screenOptions={{
                headerTitleAlign: 'center',
                drawerItemStyle: {

                },
                drawerLabelStyle: {
                    fontSize: 18
                },
                drawerActiveTintColor: 'blue',

            }}
                backBehavior='history'
                drawerContent={(props) => (<SafeAreaView style={{
                    flex: 1
                }}

                >
                    <DrawerContentScrollView {...props}>
                        <Icon name='account-circle' size={120} />
                        <Text style={{
                            fontSize: 25,
                            textAlign: 'center'
                        }}>Student</Text>
                        <DrawerItemList {...props} />
                    </DrawerContentScrollView>
                    <LogoutButton/>
                </SafeAreaView>)}
            >
                <Drawer.Screen name='Home' component={StudentDashboard} />

                <Drawer.Screen name='Companies' component={Companies} />
                <Drawer.Screen name='Ongoing Drives' component={OngoingDrives} />

                <Drawer.Screen name='Profile' component={Profile} />

                <Drawer.Group screenOptions={{
                    drawerItemStyle: {
                        display: 'none'
                    }
                }}>
                    <Drawer.Screen name='Drive' component={DrivePage} options={{
                        unmountOnBlur: true
                    }}
                    />

                    <Drawer.Screen name='Company' component={Company} options={{
                        unmountOnBlur: true
                    }}/>

                    <Drawer.Screen name='Share Experience' component={ShareExperience} 
                    options={{
                        unmountOnBlur: true
                    }}
                    />

                </Drawer.Group>

            </Drawer.Navigator>
        </>
    )
}

export default StudentLayout;

