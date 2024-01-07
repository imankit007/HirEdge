import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import useAxiosPrivate from "../../../../utils/axiosPrivate";
import { useQuery } from "@tanstack/react-query";


const DrivePage = () => {
    const api = useAxiosPrivate();
    const { drive } = useLocalSearchParams();
    const result = useQuery({
        queryKey: ['fetchDrive', drive],
        queryFn: async (): Promise<DriveData> => (
            api.get('/student/drive', {
                params: {
                    id: drive,
                }
            }).then(res => res.data)
        )
    })

    if (result.isLoading)
        return <View><Text>Loading...</Text></View>

    return (<SafeAreaView style={styles.mainContainerStyle}>

        <View>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                backgroundColor: 'yellow'
            }}>{result.data?.company_details.company_name}</Text>
        </View>


    </SafeAreaView>);
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        backgroundColor: '#DCF2F1',
        flex: 1
    }
})

export default DrivePage;

