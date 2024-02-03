import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { ScrollView } from 'react-native-gesture-handler'
import Experience from './Experience/Experience'

const InterviewExperiences = ({ company_id }: { company_id: string }) => {

    const api = useAxiosPrivate();

    const [page, setPage] = useState<number>(1);

    const result = useQuery({
        queryKey: ["fetchInterviewExperiences",],
        queryFn: () => (
            api.get('/common/interviewExperiences', {
                params: {
                    company_id: company_id,
                    page: page  
                }
            }).then(res => res.data)
        )
    })

    return (
        <View style={{
            marginTop:30,
            marginLeft:20,
            marginRight:20
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'bold'
            }}>Interview Experiences</Text>

            <ScrollView style={{marginTop:10}}>
                <Experience/>
                
            </ScrollView>
        </View>
    )
}

export default InterviewExperiences

const styles = StyleSheet.create({})