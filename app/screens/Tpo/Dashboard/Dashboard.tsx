import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useLogout from '../../../utils/useLogout';
import { Button } from '@rneui/base';
import { ScrollView } from 'react-native-gesture-handler';
import OffersTillNowCard from '../../../components/OffersTillNowCard/OffersTillNowCard';

const TPODashboard = () => {


    return (
        <ScrollView>
            <Text>TPO Dashboard</Text>
            <OffersTillNowCard />
        </ScrollView>
    )
}

export default TPODashboard;

const styles = StyleSheet.create({})