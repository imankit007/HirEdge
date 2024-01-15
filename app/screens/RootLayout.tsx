

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './Public/welcome';
import Login from './Public/login';
import { useAuth } from '../utils/AuthContext';

import StudentDashboard from './Students/Dashboard/Dashboard';
import TPODashboard from './Tpo/Dashboard/Dashboard';
import AlumniDashboard from './Alumni/Dashboard/Dashboard';
import HODDashboard from './HOD/Dashboard/Dashboard';
import StudentLayout from './Students/Layout';
const RootStack = createNativeStackNavigator();


export default function Layout() {

    const { authState } = useAuth();

    return (
        <RootStack.Navigator screenOptions={{
            headerShown: false
        }}>
            {
                !authState?.access_token ? (
                    <>
                        <RootStack.Screen name='Welcome' component={Welcome} />
                        <RootStack.Screen name='Login' component={Login} />
                    </>) : authState.role === 'student' ? (<>
                        <RootStack.Screen name="student" component={StudentLayout} />
                    </>
                    ) : authState.role === 'tpo' ? (<>
                        <RootStack.Screen name='tpo' component={TPODashboard} />
                    </>) : authState.role === 'alumni' ? (<>
                        <RootStack.Screen name='alumniDashboard' component={AlumniDashboard} />
                    </>) : authState.role === 'hod' ? (<>
                        <RootStack.Screen name='HODDashboard' component={HODDashboard} />
                    </>) : null
            }

        </RootStack.Navigator>
    )
}

const styles = StyleSheet.create({})