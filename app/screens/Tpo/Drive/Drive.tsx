import { StyleSheet, View } from 'react-native'
import React from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { Button, Text } from '@rneui/themed';
import Loading from '../../../components/Loading/Loading';

const Drive = ({ route, navigation }: DrawerScreenProps<TPODrawerParamList, 'Drive'>) => {

    const drive_id = route.params.drive_id;

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchDrive", drive_id],
        queryFn: (): Promise<DriveData> => (
            api.get(`/tpo/drive`, {
                params: {
                    drive_id: drive_id
                }
            }).then(res => res.data)
        )
    })

    if (result.isFetching) {
        return (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Loading size={200} />
        </View>)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={result.isFetching} onRefresh={() => { result.refetch() }} />
            }
        >
            <Text h1 h1Style={{
                textAlign: 'center'
            }}>{result.data?.company_details.company_name}</Text>

            <Text h3>Job Role</Text>
            <Text h4>{result.data?.job_title}</Text>

            <Text h3>Job Description</Text>
            <Text>{result.data?.job_description}</Text>


            <Button>Modify Drive</Button>

            <Button>View Student List</Button>

        </ScrollView>
    )
}

export default Drive

const styles = StyleSheet.create({})