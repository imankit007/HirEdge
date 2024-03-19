import { StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Card, SearchBar } from '@rneui/base';
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useDebounce } from '@uidotdev/usehooks';

const Companies = ({ navigation, route }: DrawerScreenProps<StudentDrawerParamList, 'Companies'>) => {
    const [search, setSearch] = useState('');
    const deferredSearch = useDebounce(search, 2000);
    const api = useAxiosPrivate();

    const { data, isLoading, isSuccess, isError, refetch } = useQuery({
        queryKey: ['fetchCompanies', deferredSearch],
        queryFn: (): Promise<CompaniesPageResponseType> =>
            api
                .get('/student/companies', {
                    params: {
                        s: deferredSearch,
                    },
                })
                .then((res) => res.data.companies),
    });

    if (isSuccess)
        return (
            <View style={styles.container}>
                <SearchBar
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Enter Company Name...."
                    containerStyle={styles.searchBarContainer}
                    inputStyle={styles.searchInput}
                    placeholderTextColor="#a8a8a8" // Placeholder text color
                />
                <ScrollView
                    style={styles.scrollView}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
                >
                    {data.data.map((company, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                navigation.navigate('Company', {
                                    company_id: company._id,
                                });
                            }}
                        >
                            <Card>
                                <Text style={styles.companyName}>{company.company_name}</Text>
                            </Card>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );

    return null;
};

export default Companies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa', // Light background color
    },
    searchBarContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff', // White background color for search bar
    },
    searchInput: {
        fontSize: 16,
        color: '#333333', // Text color
    },
    scrollView: {
        flex: 1,
    },
    // card: {
    //     marginHorizontal: 20,
    //     marginVertical: 10,
    //     borderRadius: 10,
    //     elevation: 3, // Add elevation for card shadow
    //     backgroundColor: '#ffffff', // White background color for cards
    // },
    companyName: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: '#107387', // Company name text color
    },
});
