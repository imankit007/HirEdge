import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useLogout from '../../../utils/useLogout'

import { Button } from '@rneui/base'
import { ScrollView } from 'react-native-gesture-handler'
import OngoingDrivePanel from '../OngoingDrivesPanel/OngoingDrivePanel'

const StudentDashboard = () => {

    const logout = useLogout();

    return (
        <ScrollView style={styles.mainContainer}>
            <OngoingDrivePanel />

        </ScrollView>
    )
}

export default StudentDashboard

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5EEE6'
    }
})