

import { Text, View } from 'react-native';

import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentDashboard from './Dashboard/Dashboard';
import DrivePage from './Drive/Drive';



const Drawer = createDrawerNavigator<StudentDrawerParamList>();

const StudentLayout = () => {


    return (
        <>
            <Drawer.Navigator screenOptions={{
                headerTitleAlign: 'center',
                drawerItemStyle: {

                },
                drawerLabelStyle: {
                    fontSize: 26
                },
                drawerActiveTintColor: 'blue'
            }}>
                <Drawer.Screen name='Home' component={StudentDashboard} />
                <Drawer.Screen name='Drive' component={DrivePage} options={{
                    drawerItemStyle: { display: 'none' }
                }} />
            </Drawer.Navigator>
        </>
    )
}

export default StudentLayout;

