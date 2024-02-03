import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../utils/axiosPrivate'
import BlinkingDot from '../common/BlinkingDot/BlinkingDot'

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
                <BlinkingDot/>
                <Text style={styles.textHeading}>Offers Till Now: {result.data.total}</Text>
                {/* <Text style={styles.textHeading}>{result.data.total}</Text> */}
            </View >
            }
        </>
    )
}

export default OffersTillNowCard;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        minHeight: 50,
        // borderColor: 'red',
        // borderWidth: 2,
        width: '60%',
        alignItems:'center',
        borderRadius:10,
        // backgroundColor:'red'
    },
    textHeading: {
        fontSize: 18,
        fontWeight: "800",
        textAlign: 'center',
        color:'red',
        marginTop:0
    }
})