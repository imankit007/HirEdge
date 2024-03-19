import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';

import { Button, Card } from '@rneui/themed';

const OngoingDrivePanel = () => {
    const { width } = useWindowDimensions();

    const api = useAxiosPrivate();

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["TPOOngoingDrive"],
        queryFn: async (): Promise<TPODrivesPanelResponseType> => {
            return api.get('/tpo/drives', {
                params: {
                    limit: 5,
                    page: 1,
                    s: ''
                }
            }).then(res => res.data.drives)
        },
        staleTime: 30 * 60 * 1000
    })

    if (isError)
        return (<View>
            <Text>Error....</Text>
        </View>)

    if (isLoading)
        return (<View>
            <Text>Loading.....</Text>
        </View>)

    if (isSuccess)
        return (
            <FlashList
                data={data.data}
                renderItem={({ item }) => (
                    <View style={{
                        marginVertical:20,
                        width: width * 0.4,
                        height: "90%",
                        margin: 5,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius:20,
                        padding: 10,
                        backgroundColor:'#ffffff',
                    }}>
                        <Card.Title style ={styles.cardTitle}>
                            {item.company_name}
                        </Card.Title>
                        <Card.Divider />
                        <Text style={styles.jobTitle}>{item.job_title}</Text>
                        <Button style={{borderRadius:10 }} title={"Go To Drive"} onPress={() => {
                                
                        }} />
                    </View>
                )}
                scrollEnabled
                estimatedItemSize={10}
                horizontal
                contentContainerStyle={{
                    padding: 0,
                    paddingBottom: 0, // Remove bottom spacing
                }}
                canCancelContentTouches
                style={{

                }}
            />
        )

    return null;
}

export default OngoingDrivePanel

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#107387',
        marginBottom: 5,
    },
    jobTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#107387',
        marginBottom:5,
    },
})
