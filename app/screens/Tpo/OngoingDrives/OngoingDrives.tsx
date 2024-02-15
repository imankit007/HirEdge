import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import Loading from '../../../components/Loading/Loading'
import { Card, Input } from '@rneui/themed'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { useDebounce } from '@uidotdev/usehooks'
import { FlashList } from '@shopify/flash-list'

import { Text } from '@rneui/themed'
import { Touchable } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

const OngoingDrives = ({ navigation }: DrawerScreenProps<TPODrawerParamList, 'Ongoing Drives'>) => {

    const [search, setSearch] = useState<string>('');

    const s = useDebounce(search, 2000);

    const api = useAxiosPrivate();

    const { data, isLoading, isSuccess, isError, refetch, fetchNextPage } = useInfiniteQuery({
        queryKey: ["fetchTPOOngoingDrives", s],
        queryFn: ({ pageParam }): Promise<TPODrivesResponseType> => (
            api.get('/tpo/drives', {
                params: {
                    s: s,
                    page: pageParam,
                    limit: 5
                }
            }).then(res => res.data.drives)
        ),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.metadata.page < lastPage.metadata.pageCount)
                return lastPage.metadata.page + 1;
            return undefined;
        },
        maxPages: 4,
        getPreviousPageParam: (lastPage) => {
            if (lastPage.metadata.page > 1)
                return lastPage.metadata.page - 1;

            return undefined;
        }
    })

    if (isLoading) {
        return <Loading size={200} />
    }


    if (isSuccess)
    return (

        <View style={{
            flex: 1
        }}>
            <Input
                value={search}
                onChangeText={setSearch}
                label="Company Name"
                placeholder='Search for Drives...'
            />

            <FlashList
                data={data.pages.flatMap((item) => { return item.data })}
                scrollEnabled
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onLongPress={() => {
                            navigation.navigate('Drive', {
                                drive_id: item._id
                            })
                        }}
                        pressRetentionOffset={0.5}
                    >

                        <Card>
                            <Text>
                                {item.company_name}
                            </Text>
                            <Text>
                                {item.job_title}
                            </Text>
                            <Text>
                                {item.job_ctc}
                            </Text>
                            <Text>
                                {item.registered_students}
                            </Text>
                        </Card></TouchableOpacity>)}
                estimatedItemSize={20}
                refreshing={isLoading}
                onRefresh={refetch}
                onEndReachedThreshold={1}
                onEndReached={fetchNextPage}
            />
        </View>
    )

    return null
}

export default OngoingDrives

const styles = StyleSheet.create({})


/* 

    

*/