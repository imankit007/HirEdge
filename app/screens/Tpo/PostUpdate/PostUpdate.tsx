import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { Text } from '@rneui/themed';
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../../utils/axiosPrivate';

import { RadioButton } from 'react-native-paper'

const StudentList = ({ route, navigation }: DrawerScreenProps<TPODrawerParamList, "Post Update">) => {
    const api = useAxiosPrivate();
    const drive_id = route.params.drive_id;
    const company_name = route.params.company_name;
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ["TPODriveData", drive_id],
        queryFn: (): Promise<TPODriveResponseType> => (
            api.get(`/tpo/drive/${drive_id}`, {
            }).then(res => res.data)
        )
    })

    if (isError) {
        return (
            <View><Text>Error....</Text></View>
        )
    }

    if (isLoading) {
        return (<View><Text>Loading....</Text></View>)
    }

    if (isSuccess)
        return (
            <View style={{
                flex: 1
            }}>
                <Text h3 style={{ textAlign: 'center' }}>{company_name}</Text>
                <Text> {data.drive.job_title}</Text>
                <ScrollView>
                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: 'auto',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <RadioButton
                                    value={"regular"}
                                />
                                <Text style={{ fontSize: 20 }}>Regular</Text>
                            </View>
                            <RadioButton
                                value='shortlist'
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    return null;
}

export default StudentList

const styles = StyleSheet.create({})