
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'


const PrevYearOfferCard = () => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["prevYearOfferCount"],
        queryFn: (): Promise<{
            _id: number;
            total: number;
        }> => (
            api.get('/student/prevyearoffers').then(res => res.data)
        ), staleTime: Infinity
    })

    if (result.isLoading)
        return (<View><Text>Loading...</Text></View>)

    return (
        <>
            {
                result.isSuccess && (<View style={styles.mainContainer}>
                    <Text style={styles.textHeading}>Offer Recieved in Prev Year</Text>
                    <Text style={[styles.textHeading, {}]}>{result.data.total}</Text>
                </View>)
            }
        </>
    )
}

export default PrevYearOfferCard

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        minHeight: 50,
        borderColor: 'balck',
        borderWidth: 2,
        width: '45%'
    }, textHeading: {
        fontSize: 18,
        fontWeight: "800",
        textAlign: 'center'
    }
})