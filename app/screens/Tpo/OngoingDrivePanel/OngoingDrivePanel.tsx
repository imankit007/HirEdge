import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';

import { Card } from '@rneui/themed';


const OngoingDrivePanel = () => {

    const api = useAxiosPrivate();


    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["TPOOngoingDrive"],
        queryFn: (): Promise<TPODrivesPanelResponseType> => {
            return api.get('/tpo/drives', {
                params: {
                    limit: 5,
                    page: 1,
                    s: ''
                }
            }).then(res => res.data.drives)
        }
    })
    if (isSuccess)
        return (
            <View style={{
                width: "100%",
                height: "auto"
            }}>

                <FlashList

                    data={data?.data}
                    renderItem={({ item }) => (<Card>
                        <Card.Title>{item.company_name}</Card.Title>
                        <Card.Divider />
                        <Text>{item.job_title}</Text>
                        <Text>Registered:{item.registered_students}</Text>
                        <Text>Current Staus: {item.current_status}</Text>
                    </Card>)}
                    estimatedItemSize={5}
                    horizontal
                />


            </View>
        )

    return null;
}

export default OngoingDrivePanel

const styles = StyleSheet.create({})