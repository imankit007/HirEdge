import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, ToastAndroid } from 'react-native';

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
    };

    const [topic, setTopic] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title} h4>Share your Experience</Text>
            <Text h4>Company Name: {route.params.company_name}</Text>
            <View style={styles.formContainer}>

                        <ScrollView>
                            <Input
                                label="Experience"
                                placeholder='Write your experience here...'
                        value={""}
                        onChangeText={() => { }}
                                multiline
                                inputStyle={styles.inputStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                            />
                    {/* <FieldArray name='important_topics'>
                                {({ handleRemove, push, }) => (
                                    <View>
                                        <View style={styles.topicContainer}>
                                            {values.important_topics.map((item, index) => (
                                                <View key={index} style={styles.topicItem}>
                                                    <Text style={styles.topicText}>{item}</Text>
                                                    <Icon
                                                        name='delete'
                                                        type='antdesign'
                                                        color='red'
                                                        onPress={() => handleRemove(index)}
                                                    />
                                                </View>
                                            ))}
                                        </View>
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
                                    </View>
                                )}
                            </FieldArray> */}
                            <View style={styles.sliderContainer}>
                                <Text style={styles.sliderLabel}>Difficulty Level</Text>
                                <Slider
                                    minimumValue={1}
                                    minimumTrackTintColor='green'
                                    maximumValue={5}
                                    maximumTrackTintColor='red'
                            value={1}
                            onSlidingComplete={() => { }}
                                    step={1}
                                    thumbTintColor='#40A2E3'
                                />
                                <View style={styles.sliderLabels}>
                                    <Text>Very Easy</Text>
                                    <Text>Moderate</Text>
                                    <Text>Very Difficult</Text>
                                </View>
                            </View>
                    <Button onPress={() => { }} style={styles.submitButton}>Submit</Button>
                        </ScrollView>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        textAlign: 'center',
        marginBottom: 10,
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    inputStyle: {
        minHeight: 200,
        maxHeight: 400,
        textAlignVertical: 'top',
        overflow: 'scroll',
    },
    inputContainerStyle: {
        marginBottom: 20,
    },
    topicContainer: {
        marginBottom: 20,
    },
    topicItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    topicText: {
        fontSize: 16,
    },
    sliderContainer: {
        marginBottom: 20,
    },
    sliderLabel: {
        fontSize: 16,
        marginBottom: 10,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    submitButton: {
        marginBottom: 20,
    },
});

export default ShareExperience;
