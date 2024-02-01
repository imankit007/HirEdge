import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'

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
        <View>
            <Text>InterviewExperiences</Text>
        </View>
    )
}

export default InterviewExperiences

const styles = StyleSheet.create({})