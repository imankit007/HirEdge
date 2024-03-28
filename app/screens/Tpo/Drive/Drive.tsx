import { StyleSheet, View } from 'react-native'
import React from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { Button, FAB, Icon, Text } from '@rneui/themed';
import Loading from '../../../components/Loading/Loading';
import { DataTable } from 'react-native-paper';



const Drive = ({ route, navigation }: DrawerScreenProps<TPODrawerParamList, 'Drive'>) => {

    const drive_id = route.params.drive_id;

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["TPODriveData", drive_id],
        queryFn: (): Promise<TPODriveResponseType> => (
            api.get(`/tpo/drive/${drive_id}`, {
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
    if (result.isSuccess)
    return (
        <View style={{
            flex: 1,
            padding: 5
        }}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={result.isFetching} onRefresh={() => { result.refetch() }} />
                }
            >
                <Text h1 h1Style={{
                    textAlign: 'center'
                }}>{result.data.drive.company_details.company_name}</Text>

                <Text h3>Job Role</Text>
                <Text h4>{result.data.drive.job_title}</Text>

                <Text h3>Job Description</Text>
                <Text>{result.data.drive.job_description}</Text>

                <Text>Current Status</Text><Text style={{
                    textTransform: 'uppercase',
                    color: 'green'
                }}>{result.data.drive.current_status}</Text>


            </ScrollView>
            <FAB title="Post Update"
                icon={<Icon name="plus" type='font-awesome-5' color={'white'} />}
                placement='right'
                upperCase
                onPress={() => { navigation.navigate('Post Update', { drive_id: drive_id, company_name: result.data.drive.company_details.company_name }) }}
            />
        </View>
    )

    return null;
}

export default Drive

const styles = StyleSheet.create({})