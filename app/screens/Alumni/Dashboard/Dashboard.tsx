import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import useLogout from '../../../utils/useLogout'

const AlumniDashboard = () => {

    const logout = useLogout();

    return (
        <View>
            <Text>Alumni Dashboard</Text>

            <Button onPress={logout}>Log Out</Button>

        </View>
    )
}

export default AlumniDashboard

const styles = StyleSheet.create({})