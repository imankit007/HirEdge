import { StyleSheet, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { FieldArray, Formik } from 'formik';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Input, Text, Slider, Icon } from '@rneui/themed';


interface ShareExperienceType {
    company_id: string;
    difficulty: number;
    experience: string;
    important_topics: Array<string>;
}




const ShareExperience = ({ navigation, route }: DrawerScreenProps<StudentDrawerParamList, "Share Experience">) => {

    const api = useAxiosPrivate();

    const company_id = route.params.company_id;
    const initialValues: ShareExperienceType = {
        company_id: company_id,
        difficulty: 1,
        experience: '',
        important_topics: []
    }


    const [topic, setTopic] = useState<string>('');

    return (
        <View style={{
            flex: 1
        }}>
            <Text style={{
                textAlign: 'center'
            }} h4 >Share your Experience</Text>

            <Text h4>Company Name: {route.params.company_name}</Text>

            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {

                    api.post(`/common/company/${company_id}/experiences`, values).then((res) => {
                        if (res.status == 200) {

                            formikHelpers.resetForm();
                            ToastAndroid.show('Interview Experience Posted', ToastAndroid.SHORT);
                            navigation.goBack();
                        }
                    }).catch((err) => {
                        ToastAndroid.show(err.message, ToastAndroid.SHORT);
                        console.log(err);
                    })

                }}
            >
                {
                    ({ values, handleSubmit, handleChange, setFieldValue, handleReset }) => (
                        <View style={{
                            flex: 1,
                        }}>
                            <ScrollView>
                                <Input
                                    label="Experience"
                                    placeholder='Write your experience here...'
                                    value={values.experience}
                                    onChangeText={handleChange('experience')}
                                    multiline
                                    inputStyle={{
                                        minHeight: 200,
                                        maxHeight: 400,
                                        textAlignVertical: 'top',
                                        overflow: 'scroll'
                                    }}
                                    inputContainerStyle={{
                                    }}
                                />
                                <FieldArray name='important_topics'>
                                    {
                                        ({ handleRemove, push, }) => (<View style={{

                                        }}>
                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                gap: 5
                                            }}>
                                                {
                                                    values.important_topics.map((item, index) => (
                                                        <View key={index} style={{
                                                            flexDirection: 'row',
                                                            gap: 5,
                                                            alignItems: 'center',
                                                            borderWidth: 1,
                                                            borderColor: 'black',
                                                            borderRadius: 20,
                                                            justifyContent: 'space-around',
                                                            padding: 5
                                                        }}>
                                                            <Text style={{ fontSize: 20, paddingStart: 6 }} >{item}</Text>
                                                            <Icon
                                                                name='delete'
                                                                type='antdesign'
                                                                color='red'
                                                                onPress={handleRemove(index)}
                                                            />
                                                        </View>))
                                                }</View>
                                            <Input
                                                label="Topic"
                                                value={topic}
                                                onChangeText={setTopic}
                                                rightIcon={
                                                    <Icon
                                                        name='plus'
                                                        type='antdesign'
                                                        onPress={() => {
                                                            push(topic);
                                                            setTopic('');
                                                        }}
                                                    />
                                                }

                                            />
                                        </View>)
                                    }
                                </FieldArray>

                                <View>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text>Very Easy</Text>
                                        <Text>Moderate</Text>
                                        <Text>Very Difficult</Text>
                                    </View>

                                    <Slider
                                        minimumValue={1}
                                        minimumTrackTintColor='green'
                                        maximumValue={5}
                                        maximumTrackTintColor='red'
                                        value={values.difficulty}
                                        onSlidingComplete={(value) => {
                                            setFieldValue('difficulty', value)
                                        }}
                                        step={1}
                                        thumbTintColor='#40A2E3'

                                    />
                                </View>

                            </ScrollView>
                            <Button style={{
                                position: 'absolute',
                                bottom: 2
                            }} onPress={() => { handleSubmit() }}>Submit</Button>
                        </View>)
                    }
            </Formik>
        </View>
    )
}

export default ShareExperience;

const styles = StyleSheet.create({})