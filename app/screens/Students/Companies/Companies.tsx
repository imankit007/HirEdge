

import { StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import { Card, SearchBar } from '@rneui/base'


import { useQuery } from '@tanstack/react-query'

import useAxiosPrivate from '../../../utils/axiosPrivate'
import { RefreshControl, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDebounce } from '@uidotdev/usehooks'
import { DrawerScreenProps } from '@react-navigation/drawer'

const Companies = ({ navigation, route }: DrawerScreenProps<StudentDrawerParamList, 'Companies'>) => {

    const [search, setSearch] = useState("");

    const deferredSearch = useDebounce(search, 2000);

    const api = useAxiosPrivate();

    const { data, isLoading, isSuccess, isError, refetch } = useQuery({
        queryKey: ['fetchCompanies', deferredSearch],
        queryFn: (): Promise<CompaniesPageResponseType> => (
            api.get('/student/companies', {
                params: {
                    s: deferredSearch
                }
            }).then(res => res.data.companies)
        )
    })

    if (isSuccess)
    return (
        <View>
            <SearchBar
                value={search}
                onChangeText={setSearch}
                placeholder='Enter Company Name....'
            />
            <ScrollView
                refreshControl={<RefreshControl
                    refreshing={isLoading}
                    onRefresh={refetch}
                />}
            >
                {
                    data.data.map((company, index) => (
                                <TouchableOpacity key={index}
                                    onPress={() => {
                                        navigation.navigate('Company', {
                                            company_id: company._id
                                        })
                                    }}
                                >
                                    <Card>
                                        <Text>
                                    {company.company_name}
                                        </Text>
                                    </Card>
                                </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )

    return null

}

export default Companies;

const styles = StyleSheet.create({})