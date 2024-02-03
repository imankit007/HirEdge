import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon } from '@rneui/themed'
import useLogout from '../../utils/useLogout'


const LogoutButton = () => {

    const logout = useLogout();

    return (
        <Button type='solid' color={'warning'} style={{
        }} buttonStyle={{
            borderRadius: 20,
            width: "80%"
        }} containerStyle={{
            width: '100%',
            alignItems: 'center',
            marginBottom: 35,
        }} icon={<Icon name='logout' />} titleStyle={{
            fontSize: 20
        }} onPress={logout}>Logout</Button>
    )
}

export default LogoutButton

const styles = StyleSheet.create({})