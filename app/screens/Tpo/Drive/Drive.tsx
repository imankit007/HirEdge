import { StyleSheet, View } from 'react-native'
import React from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { Button, Text } from '@rneui/themed';
import Loading from '../../../components/Loading/Loading';
import { DataTable } from 'react-native-paper';

const Drive = ({ route, navigation }: DrawerScreenProps<TPODrawerParamList, 'Drive'>) => {

    const drive_id = route.params.drive_id;

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchDrive", drive_id],
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

    return (
        <View style={{
            flex: 1
        }}>
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

                <Text>Current Status</Text><Text style={{
                    textTransform: 'uppercase',
                    color: 'green'
                }}>{result.data?.current_status}</Text>

                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>USN</DataTable.Title>
                        <DataTable.Title>Status</DataTable.Title>
                    </DataTable.Header>

                    {
                        result.data?.students.map((item, index) => (<DataTable.Row key={index}>

                            <DataTable.Cell textStyle={{
                                textTransform: 'uppercase'
                            }}>{item.usn}</DataTable.Cell>
                            <DataTable.Cell textStyle={{
                                textTransform: 'uppercase'
                            }}>{item.status}</DataTable.Cell>
                        </DataTable.Row>))
                    }

                </DataTable>



            </ScrollView>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
            }}>

                <Button style={{
                    display: 'flex',
                    width: "50%"
                }} >Modify Drive</Button>

                <Button style={{
                    display: 'flex',
                    width: "50%"
                }}>View Student List</Button>
            </View>
        </View>
    )
}

export default Drive

const styles = StyleSheet.create({})