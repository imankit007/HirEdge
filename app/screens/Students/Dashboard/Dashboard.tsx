import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useLogout from '../../../utils/useLogout'

import { Button } from '@rneui/base'
import { ScrollView } from 'react-native-gesture-handler'
import OngoingDrivePanel from '../OngoingDrivesPanel/OngoingDrivePanel'
import OffersTillNowCard from '../../../components/OffersTillNowCard/OffersTillNowCard'
import PrevYearOfferCard from '../PrevYearOfferCard/PrevYearOfferCard'

const StudentDashboard = () => {

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <OffersTillNowCard />
                <PrevYearOfferCard />
            </View>
            <OngoingDrivePanel />
        </ScrollView>
    )
}

export default StudentDashboard

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
})