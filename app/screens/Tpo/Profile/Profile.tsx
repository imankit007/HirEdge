import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from '@rneui/base'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { Button } from '@rneui/themed'

const Profile = () => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ['TPOProfile'],
        queryFn: (): Promise<TPOProfile> => (
            api.get('/tpo/profile').then(res => res.data)
        ),
        enabled: true
    })


    if (result.isLoading) {
        <View><Text> Loading....</Text></View>
    }



    return (
        <View style={styles.mainContainer}>
            <ScrollView
                contentContainerStyle={{
                    paddingVertical: 20
                }}
            >
                <Avatar title='T'
                    size={100}
                    rounded
                    containerStyle={{
                        backgroundColor: "purple",
                        alignSelf: 'center'
                    }}
                />

                <Text>{result.data?.first_name}</Text>


                <Button onPress={() => {
                    result.refetch();
                }}>Refresh</Button>

            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})