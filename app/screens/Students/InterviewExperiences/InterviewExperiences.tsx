import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import Experience from './Experience/Experience'
import { FlashList } from '@shopify/flash-list'
import Loading from '../../../components/Loading/Loading'

const InterviewExperiences = ({ company_id }: { company_id: string }) => {

    const api = useAxiosPrivate();


    const { data, isFetching, isLoading, isError, refetch, isSuccess, fetchNextPage } = useInfiniteQuery({
        queryKey: ["fetchInterviewExperiences", company_id],
        queryFn: ({ pageParam }): Promise<ExperiencesResponseType> => (
            api.get(`/common/company/${company_id}/interviewexperiences`, {
                params: {
                    page: pageParam  
                }
            }).then(res => res.data.experiences)
        ),
        getNextPageParam: (lastPage) => {
            if (lastPage.metadata.page < lastPage.metadata.pageCount) {
                return (lastPage.metadata.page + 1);
            }
            return undefined;
        },
        initialPageParam: 1,
        maxPages: 4,
        getPreviousPageParam: (lastPage) => {
            if (lastPage.metadata.page > 1)
                return lastPage.metadata.page - 1;

            return undefined;
        }

    })


    if (isLoading) {
        return (<Loading size={100} />)
    }

    if (isError) {
        return (<View>
            <Text>Something went wrong..</Text>
        </View>)
    }

    if (isSuccess)
        return (
            <FlashList
                data={data.pages.flatMap((data) => (data.data))}
                renderItem={({ item }) => 
                //Experience component
                (<View style={[{
                    width: "90%",
                    // borderWidth: 2,
                    // borderColor: 'black',
                    alignSelf: 'center',
                    height: "auto",
                    backgroundColor:'white',
                    padding:13,
                    borderRadius:10
                }]}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'bold',
                        color:'#836FFF',
                        marginBottom:8
                    }}>Jai Irkal</Text>
                    <Text style={{
                        fontSize: 20
                    }}>Difficulty: {
                        
                    item.difficulty==1? "Easy": item.difficulty==2? "Moderate":"Difficult"
                    }</Text>
                    <View style={{
                        flexDirection: "row",
                        columnGap: 5
                    }}>
                        {

                            item.important_topics?.map((topic, index) => (<Text key={index} style={{
                                borderColor: '#836FFF',
                                borderWidth: 2,
                                borderRadius:10,
                                padding: 5,
                                textAlign:'center',
                                color:'#836FFF',
                                fontWeight:'bold',
                                margin:5,
                                marginTop:10,
                                marginBottom:10
                            }}>{topic}</Text>))

                        }</View>
                    <Text style={{
                        fontSize: 20,
                        // borderWidth: 1,
                        // borderColor: 'black'
                    }}>{item.experience}
                    </Text>
                    <Text style={{fontSize:12, textAlign:'right', color:'grey'}}>Posted on 16/02/2024</Text>
                </View>)}
                estimatedItemSize={100}
                contentContainerStyle={{
                    paddingVertical: 8,
                }}
                onEndReachedThreshold={0.6}
                onEndReached={fetchNextPage}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
            />
        )
    return (
        null
    )
}

export default InterviewExperiences

const styles = StyleSheet.create({})