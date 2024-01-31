
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../utils/axiosPrivate";
import { RouteProp } from "@react-navigation/native";
import { DrawerProps, DrawerScreenProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { Button, Text } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";



const DrivePage = ({ route }: DrawerScreenProps<StudentDrawerParamList, "Drive">) => {
    const api = useAxiosPrivate();

    const drive = route.params.drive_id;

    const result = useQuery({
        queryKey: ['fetchDrive', drive],
        queryFn: async (): Promise<DriveStudentDataType> => (
            api.get('/student/drive', {
                params: {
                    id: drive,
                }
            }).then(res => res.data)
        )
    })

    if (result.isLoading)
        return <View><Text>Loading...</Text></View>

    return (
        <>
            {
                result.isSuccess && (
                    <ScrollView contentContainerStyle={styles.mainContainerStyle}>
                        <Text style={{
                            fontSize: 30,
                textAlign: 'center',
                        }} h2>{result.data?.company_details.company_name}</Text>

                        <Text h4>Compnay Website: {result.data?.company_details.company_website}</Text>
                        <Text h4>Job-Title: {result.data?.job_title}</Text>
                        <Text h4>CTC: {result.data.job_ctc}</Text>

                        <Text h4 style={{ color: "red" }}>Eligibility Criterias</Text>

                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text h4>
                                    Branch :
                                </Text>

                                {result.data.branch.map((branch, index, arr) => (<Text key={index} style={{
                                    textTransform: 'uppercase',
                                    fontSize: 20
                                }}>{branch}{(index != arr.length - 1 && ", ")}</Text>))
                                }
                            </View>

                            <Text h4>10th Marks : {result.data.tenth_cutoff}%</Text>
                            <Text h4>12th Marks: {result.data.twelfth_cutoff}%</Text>
                            <Text h4>UG CGPA: {result.data.ug_cutoff || 'nil'}</Text>
                            <Text h4>Other Criterias: { }</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text h4>Job Locations:</Text>
                            {
                                result.data.job_location.map((city, index, arr) => (
                                    <Text key={index} style={{
                                        textTransform: 'capitalize',
                                        fontSize: 20
                                    }}>{city} {(index != arr.length - 1 && ',')} </Text>
                                ))
                            }
                        </View>

                        <Text h4>Job Description</Text>

                        <Text style={{
                            fontSize: 20
                        }}>{result.data.job_description}</Text>



                        <Button title={result.data.applied ? "Already Registered" : "Register"}
                            disabled={result.data.applied}
                            style={{
                                alignSelf: 'flex-end',
                            }} containerStyle={{
                                position: "absolute",
                                bottom: 5,
                                alignSelf: "center",
                                width: '90%',
                            }}

                            titleStyle={{
                                fontSize: 20
                            }}

                            buttonStyle={{
                                borderRadius: 20
                            }}

                        />

                    </ScrollView>)

            }
        </>
    );
}

const styles = StyleSheet.create({
    mainContainerStyle: {
        flex: 1
    }
})

export default DrivePage;

