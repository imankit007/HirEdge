import { Linking, StyleSheet, ToastAndroid, View, useWindowDimensions, } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate';

import { Text } from '@rneui/base'
import { FAB, Tab, TabView } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import InterviewExperiences from '../InterviewExperiences/InterviewExperiences';



const Company = ({ navigation, route }: studentScreenProp) => {
    const company_id = route.params.company_id;

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["getCompanyDetails", company_id],
        queryFn: (): Promise<CompanyDetails> => (
            api.get('/student/company', {
                params: {
                    company_id
                }
            }).then(res => res.data)
        ), staleTime: Infinity
    })

    return (
        <>
            <ScrollView
                style={{
                    flex: 1,
                }}>
                <Text h1 style={{ alignSelf: "center" }}>{result.data?.company_name}</Text>
                <Text h4>Company Website</Text>
                <Text onPress={() => {
                    Linking.openURL(`https://${result.data?.company_website}`)
                }} style={{
                    textDecorationLine: 'underline',
                    fontSize: 20,
                    left: 10,
                    color: 'blue'
                }}>{result.data?.company_website}</Text>

                <InterviewExperiences company_id={company_id} />

            </ScrollView>

            <FAB title={"Share Experience"} icon={{ name: 'add' }} placement='right' style={{
                position: 'absolute',

            }}
                onPress={() => {
                    ToastAndroid.show(
                        'Share Experience',
                        ToastAndroid.SHORT,
                    )
                }}
            >
            </FAB>
        </>
    )
}

export default Company

const styles = StyleSheet.create({})