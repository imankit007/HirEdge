

import { StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import { Card, SearchBar } from '@rneui/base'


import { useQuery } from '@tanstack/react-query'

import { useDeferredValue } from 'react'
import { defaultFormat } from 'moment'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDebounce } from '@uidotdev/usehooks'
import { DrawerScreenProps } from '@react-navigation/drawer'

const Company = ({ navigation, route }: DrawerScreenProps<StudentDrawerParamList, 'Companies'>) => {

    const [search, setSearch] = useState("");

    const deferredSearch = useDebounce(search, 2000);

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ['fetchCompanies', deferredSearch],
        queryFn: (): Promise<Array<{
            id: string;
            title: string;
        }>> => (
            api.get('/student/companies', {
                params: {
                    s: deferredSearch
                }
            }).then(res => res.data)
        ),
        staleTime: Infinity
    })


    return (
        <View>
            <SearchBar
                value={search}
                onChangeText={setSearch}
                placeholder='Enter Company Name....'
            />
            <ScrollView
            >
                {
                    result.status == 'success' && (<>

                        {
                            result.data.map((company, index) => (
                                <TouchableOpacity key={index}
                                    onPress={() => {
                                        navigation.navigate('Company', {
                                            company_id: company.id
                                        })
                                    }}
                                >
                                    <Card>
                                        <Text>
                                            {company.title}
                                        </Text>
                                    </Card>
                                </TouchableOpacity>
                            ))
                        }
                    </>)
                }
            </ScrollView>


        </View>
    )
}

export default Company

const styles = StyleSheet.create({})