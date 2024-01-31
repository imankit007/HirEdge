import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import { useQuery } from '@tanstack/react-query'

import useAxiosPrivate from '../../../utils/axiosPrivate';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from '@rneui/base';
import { DrawerNavigationProp } from '@react-navigation/drawer';



const OngoingDrivePanel = () => {

    const api = useAxiosPrivate();
    const navigation = useNavigation<studentScreenProp>();
    const result = useQuery({
        queryKey: ['fetchOngoingDrives'],
        queryFn: (): Promise<Array<DriveCardData>> => (api.get('/student/drives').then(res => res.data))
    })

    const renderOngoingDrive = ({ item }: { item: DriveCardData }) => {

        return (
            <View style={[styles.cardStyle, {

            }]}>
                <Text style={styles.fontStyle}>{item.company_name}</Text>
                <Text style={styles.fontStyle}>{item.job_title}</Text>
                <Text style={styles.fontStyle}>{item.job_ctc}</Text>

                <Button onPress={() => {
                    navigation.navigate('student', { screen: 'Drive', params: { drive_id: item._id } });
                }}
                    containerStyle={{
                        width: "90%",
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 10
                    }}
                >Learn More</Button>
            </View>
        )
    }


    return (
        <View style={styles.panelStyle}>
            <Text h4 style={{ textDecorationLine: 'underline' }} onPress={() => {

            }}>{"Ongoing Drives"}</Text>
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
        backgroundColor: '#DCF2F1',
        paddingVertical: 10,
        paddingStart: 10
    },
    fontStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    cardStyle: {
        borderRadius: 10,
        minWidth: 150,
        padding: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: 'white'
    }
})