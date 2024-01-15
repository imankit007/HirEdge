import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useLogout from '../../../utils/useLogout';
import { Button } from '@rneui/base';


const HODDashboard = () => {

    const logout = useLogout();

    return (
        <View>
            <Text>HOD Dashboard</Text>
            <Button onPress={logout}>Log Out</Button>
        </View>
    )
}

export default HODDashboard

const styles = StyleSheet.create({})