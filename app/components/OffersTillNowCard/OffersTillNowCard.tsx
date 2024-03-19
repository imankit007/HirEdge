import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../utils/axiosPrivate';

const OffersTillNowCard = () => {
    const api = useAxiosPrivate();

    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchCurrYearOffers"],
        queryFn: async () => {
            try {
                const response = await api.get('/common/totaloffers');
                return response.data;
            } catch (error) {
                console.error('Error fetching offers:', error);
                throw new Error('Failed to fetch offers');
            }
        },
        staleTime: Infinity,
        enabled: false
    });

    if (isLoading)
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#fff" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );

    if (isError)
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to fetch offers</Text>
            </View>
        );

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textHeading}>Total Offers: 400</Text>
        </View>
    );
};

export default OffersTillNowCard;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 70,
        padding: 20,
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignContent:'center',
    },
    textHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#107387',
        textAlign: 'center',
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        padding: 20,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loadingText: {
        fontSize: 18,
        marginTop: 10,
        color: '#107387',
    },
    errorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        padding: 20,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
