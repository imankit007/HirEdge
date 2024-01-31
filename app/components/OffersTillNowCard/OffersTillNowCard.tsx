import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../utils/axiosPrivate'

const OffersTillNowCard = () => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchCurrYearOffers"],
        queryFn: (): Promise<{
            _id: number
            total: number
        }> => (
            api.get('/common/totaloffers').then(res => res.data)
        ),
        staleTime: Infinity
    })

    if (result.isLoading)
        return (<View><Text>Loading...</Text></View>)

    return (
        <>
            {result.isSuccess && < View style={styles.mainContainer}>
                <Text style={styles.textHeading}>Offers Till Now</Text>
                <Text style={styles.textHeading}>{result.data.total}</Text>
            </View >
            }
        </>
    )
}

export default OffersTillNowCard;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        minHeight: 50,
        borderColor: 'balck',
        borderWidth: 2,
        width: '45%'
    },
    textHeading: {
        fontSize: 18,
        fontWeight: "800",
        textAlign: 'center'
    }
})