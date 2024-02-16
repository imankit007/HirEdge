import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import { useQuery } from '@tanstack/react-query'

import useAxiosPrivate from '../../../utils/axiosPrivate';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from '@rneui/base';
import { DrawerNavigationProp, } from '@react-navigation/drawer';



const OngoingDrivePanel = () => {

    const api = useAxiosPrivate();
    const navigation = useNavigation<DrawerNavigationProp<StudentDrawerParamList, 'Home'>>();
    const result = useQuery({
        queryKey: ['fetchOngoingDrives'],
        queryFn: (): Promise<StudentOngoingDriveResponseType> => (api.get('/student/drives').then(res => res.data.drives))
    })

    const renderOngoingDrive = ({ item }: { item: StudentDriveListType }) => {

        return (
            <View style={[styles.cardStyle, {

            }]}>
                <Text style={styles.fontStyle}>{item.company_name}</Text>
                <Text style={styles.fontStyle}>{item.job_title}</Text>
                <Text style={styles.fontStyle}>{item.job_ctc}</Text>

                <Button onPress={() => {
                    navigation.navigate('Drive', {
                        drive_id: item._id
                    })
                }}
                    buttonStyle={{
                        borderRadius:15,
                        padding:10
                    }}
                    containerStyle={{
                        width: "90%",
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 10,
                        height:50,
                    }}
                ><Text style={{color:'white', fontWeight:'bold', fontSize:13}}>Learn More</Text></Button>
            </View>
        )
    }

    if (result.isSuccess)
    return (
        <View style={styles.panelStyle}>
            <Text h4 style={{ marginBottom:10 }} onPress={() => {

            }}>{"Ongoing Drives"}</Text>
            <FlatList
                data={result.data.data}
                renderItem={renderOngoingDrive}
                showsHorizontalScrollIndicator
                keyExtractor={item => item._id}
                horizontal
                style={{ columnGap: 10 }}
                ItemSeparatorComponent={() => (<View style={{ width: 10 }}></View>)}
            />
        </View>
    )

    return null;
}

export default OngoingDrivePanel;

const styles = StyleSheet.create({
    panelStyle: {
        display: 'flex',
        minHeight: 240,
        height: "30%",
        backgroundColor: '#DCF2F1',
        paddingVertical: 10,
        paddingStart: 10
    },
    fontStyle: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign:'center'
    },
    cardStyle: {
        borderRadius: 10,
        height:"90%",
        minWidth: "18%",
        padding: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: 'white',
        marginTop:0
    }
})