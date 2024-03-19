import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../../utils/axiosPrivate';

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
    });

    if (result.isLoading)
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );

    return (
        <>
            {result.isSuccess && (
                <View style={styles.mainContainer}>
                    <Text style={styles.textHeading}>Offer Received in Previous Year</Text>
                    <Text style={styles.offerCount}>{result.data.total}</Text>
                </View>
            )}
        </>
    );
};

export default PrevYearOfferCard;

const styles = StyleSheet.create({
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        backgroundColor: '#f5f5f5',
    },
    mainContainer: {
        minHeight: 50,
        borderWidth: 2,
        borderColor: '#107387',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        backgroundColor: '#fff',
    },
    textHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: '#107387',
    },
    offerCount: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#107387',
    },
});
