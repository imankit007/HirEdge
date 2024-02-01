import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Text } from '@rneui/themed';

const ShareExperience = ({ navigation, route }: DrawerScreenProps<StudentDrawerParamList, "Share Experience">) => {

    const api = useAxiosPrivate();

    return (
        <View style={{
            flex: 1
        }}>
            <ScrollView>
                <Formik
                    initialValues={{

                    }}
                    onSubmit={() => {

                    }}
                >
                    {
                        (props) => (<View>
                            <Text> {route.params.company_id}</Text>
                        </View>)
                    }
                </Formik>
            </ScrollView>
        </View>
    )
}

export default ShareExperience;

const styles = StyleSheet.create({})