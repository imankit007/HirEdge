import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { useQuery } from '@tanstack/react-query';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from '@rneui/themed';
import { DrawerScreenProps } from '@react-navigation/drawer';

const OngoingDrives = ({ navigation }: DrawerScreenProps<StudentDrawerParamList, 'Ongoing Drives'>) => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchOngoingPlacements"],
        queryFn: (): Promise<StudentOngoingDriveResponseType> => (
            api.get('/student/drives', {
                params: {
                    s: '',
                    page: 1,
                    limit: 10,
                }
            }).then(res => res.data.drives)
        )
    })

    if (result.isLoading)
        return <View style={{
            flex: 1
        }}>
            <ActivityIndicator style={{
                flex: 1
            }} size={250} />
        </View>
    if (result.isSuccess)
    return (
        <View style={{
            flex: 1
        }}>

            {
                result.isSuccess && (
                    <>
                        <ScrollView >
                            {
                                result.data.data.map((drive, index) => (
                                    <TouchableOpacity key={index} onPress={() => {
                                        navigation.navigate('Drive', {
                                            drive_id: drive._id
                                        })
                                    }}
                                        pressRetentionOffset={0}
                                    >
                                        <Card>
                                            <Card.Title>{drive.company_name}</Card.Title>
                                            <Card.Divider />
                                            <Text>{drive.job_title}</Text>
                                            <Text>{drive.job_ctc}</Text>
                                        </Card>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </>
                )
            }

        </View>
    )

    return null;
}

export default OngoingDrives;

const styles = StyleSheet.create({})