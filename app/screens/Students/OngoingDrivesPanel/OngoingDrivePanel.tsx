import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useQuery } from '@tanstack/react-query'

import useAxiosPrivate from '../../../utils/axiosPrivate';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';

const OngoingDrivePanel = () => {

    const api = useAxiosPrivate();
    const navigation = useNavigation();
    const result = useQuery({
        queryKey: ['fetchOngoingDrives'],
        queryFn: (): Promise<Array<DriveCardData>> => (api.get('/student/getdrives').then(res => res.data))
    })

    const renderOngoingDrive = ({ item }: { item: DriveCardData }) => {

        return (
            <View style={styles.cardStyle}>
                <Text style={styles.fontStyle}>{item.company_name}</Text>
                <Text style={styles.fontStyle}>{item.job_title}</Text>
                <Text style={styles.fontStyle}>{item.job_ctc}</Text>

                <Button onPress={() => {
                    navigation.navigate('student', { screen: 'Drive', params: { drive_id: item._id } })
                }}>Learn More</Button>

            </View>
        )
    }


    return (
        <View style={styles.panelStyle}>

            <FlatList
                data={result.data}
                renderItem={renderOngoingDrive}
                showsHorizontalScrollIndicator
                keyExtractor={item => item._id}
                horizontal
                style={{ columnGap: 10 }}
                ItemSeparatorComponent={() => (<View style={{ width: 10 }}></View>)}
            />
        </View>
    )
}

export default OngoingDrivePanel

const styles = StyleSheet.create({
    panelStyle: {
        display: 'flex',
        minHeight: 180,
        height: "30%",
        backgroundColor: '#EBD9B4',
        paddingVertical: 10,
        paddingStart: 10
    },
    fontStyle: {
        fontSize: 18
    },
    cardStyle: {
        borderRadius: 10,
        borderColor: '#647D87',
        borderWidth: 1,
        backgroundColor: '#F3D7CA',
        minWidth: 100,
    }
})