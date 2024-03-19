import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import OngoingDrivePanel from '../OngoingDrivesPanel/OngoingDrivePanel';
import OffersTillNowCard from '../../../components/OffersTillNowCard/OffersTillNowCard';
import PrevYearOfferCard from '../PrevYearOfferCard/PrevYearOfferCard';

const StudentDashboard = () => {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.header}>
            <Image
                    style={styles.avatar}
                    source={require('../../../../assets/avatars/graduated.png')} // Replace with your image source
                />
                <Text style={styles.headerText}>Welcome to Student Dashboard</Text>
               
            </View>
            <View style={styles.cardContainer}>
                <OffersTillNowCard />
            </View>
            <OngoingDrivePanel />


            <View>
                <PrevYearOfferCard />
            </View>
        </ScrollView>


    );
};

export default StudentDashboard;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#94DFE6', // Light background color
    },
    header: {
        backgroundColor: '#94DFE6', // Header background color
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'center', // Center content horizontally
    },
    headerText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#107387', // Header text color
    },
    avatar: {
        width: 150,
        height: 150,
        marginLeft:1,
        marginRight:0, // Add some spacing between text and avatar
        borderRadius: 25, // Make it a circle
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});
