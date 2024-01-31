import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import Loading from '../../../components/Loading/Loading'
import { Card } from '@rneui/themed'
import { Button, Icon } from '@rneui/base'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Pagination from '../../../components/Pagination/Pagination'

const OngoingDrives = ({ navigation }: DrawerScreenProps<TPODrawerParamList, 'Ongoing Drives'>) => {

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(2);


    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchOngoingDrives", page, limit],
        queryFn: (): Promise<TPODrivesResponseType> => (
            api.get('/tpo/drives', {
                params: {
                    name: '',
                    page: page,
                    limit: limit
                }
            }).then(res => res.data)
        )
    })

    if (result.isLoading) {
        return <Loading size={200} />
    }

    return (
        <View style={{
            flex: 1
        }}>
            {
                result.isSuccess ? (
                    <>
                        <ScrollView
                            refreshControl={
                                <RefreshControl refreshing={result.isFetching} onRefresh={() => result.refetch()} />
                            }
                        >
                            {
                                result.data.drives.map((item, index) => (
                                    <Card key={index} >
                                        <Card.Title>
                                            {item.company_name}
                                        </Card.Title>
                                        <Card.Divider />
                                        <View>
                                            <Text>
                                                {item.job_title}
                                            </Text>
                                            <Text>{item.job_ctc}</Text>
                                        </View>
                                        <Button onPress={() => {
                                            navigation.navigate('Drive', { drive_id: item._id })
                                        }}>Manage Drive</Button>
                                    </Card>
                                ))
                            }
                        </ScrollView>
                        <Text>{Math.ceil(result.data?.count / limit)}</Text>
                        <Pagination page={page} setPage={setPage} totalPages={Math.ceil(result.data?.count / limit)} />
                    </>
                ) : (<View> Erorr Page</View>)
            }



        </View >
    )
}

export default OngoingDrives

const styles = StyleSheet.create({})


/* 

    

*/