import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import useLogout from '../../../utils/useLogout';
import { Button } from '@rneui/base';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import OffersTillNowCard from '../../../components/OffersTillNowCard/OffersTillNowCard';
import { Card } from '@rneui/themed';
import OngoingDrivePanel from '../OngoingDrivePanel/OngoingDrivePanel';
import { DrawerScreenProps } from '@react-navigation/drawer';

const TPODashboard = ({ route, navigation }: DrawerScreenProps<TPODrawerParamList, "Home">) => {

    const [refresh, setRefresh] = useState<boolean>(false);


    return (
        <ScrollView
        >
            <OffersTillNowCard />

            <OngoingDrivePanel />
            <Card>
                <Card.Title>Manage Students</Card.Title>
                <Card.Divider />

                <Button
                    onPress={() => {
                        navigation.navigate('Add Student')
                    }}
                >
                    Add Student
                </Button>
            </Card>

            <Card>
                <Card.Title>
                    Manage Drives
                </Card.Title>
                <Card.Divider />
                <Button>
                    Add Drive
                </Button>
                <Card.Divider />
                <Button>
                    View Drives
                </Button>
            </Card>

        </ScrollView>
    )
}

export default TPODashboard;

const styles = StyleSheet.create({})