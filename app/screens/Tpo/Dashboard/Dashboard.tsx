import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import useLogout from '../../../utils/useLogout';
import { Button } from '@rneui/base';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import OffersTillNowCard from '../../../components/OffersTillNowCard/OffersTillNowCard';
import { Card } from '@rneui/themed';
import OngoingDrivePanel from '../OngoingDrivePanel/OngoingDrivePanel';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useQueryClient } from '@tanstack/react-query';

const TPODashboard = ({ route, navigation }: DrawerScreenProps<TPODrawerParamList, "Home">) => {

    const { height, width } = useWindowDimensions();


    const [refresh, setRefresh] = useState<boolean>(false);

    const queryClient = useQueryClient();

    return (
        <ScrollView
            refreshControl={<RefreshControl
                refreshing={queryClient.getQueryState(['TPOOngoingDrive'])?.status == 'pending'}
                onRefresh={() => {

                    queryClient.refetchQueries({
                        'queryKey': ['TPOOngoingDrive']
                    })
                }}
            />}
        >

            <View style={{
                height: height * 0.1,
            }}>
                <OffersTillNowCard />
            </View>


            <View style={{
                width: width,
                height: height * 0.2,
                backgroundColor: 'lightblue',
                padding: 0
            }}>
                <OngoingDrivePanel />
            </View>
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
                <Button onPress={() => {
                    navigation.navigate('Add Drive')
                }} pressRetentionOffset={0}>
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