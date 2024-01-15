import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useLogout from '../../../utils/useLogout';
import { Button } from '@rneui/base';

const TPODashboard = () => {

    const logout = useLogout();

    return (
        <View>
            <Text>TPO Dashboard</Text>
            <Button onPress={logout}>Log Out</Button>
        </View>
    )
}

export default TPODashboard;

const styles = StyleSheet.create({})