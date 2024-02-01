import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'



import { Formik } from 'formik'
import { Button, Icon, Input, Overlay } from '@rneui/themed'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import SelectDropdown from 'react-native-select-dropdown'


const AddStudent = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);

    };
    const showDatepicker = () => {
        setShow(true);
    };



    return (

        <View style={{
            flex: 1
        }}>


            <ScrollView >

            <Formik
                initialValues={{
                    usn: '',
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    dob: '',
                    mobile: '', email: '',
                    branch: '',
                    tenth_percentage: '',
                    twelfth_percentage: '',
                    ug_cgpa: '',
                }}
                onSubmit={(values, helpers) => {
                    ToastAndroid.show(JSON.stringify(values), ToastAndroid.SHORT)
                    console.log(JSON.stringify(values));
                }}

            >
                {
                    ({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
                        <View>

                            <Input
                                value={values.usn}
                                placeholder='Enter USN'
                                onChangeText={handleChange('usn')}
                                label="USN"
                                errorMessage={errors.usn}
                            />

                            <Input
                                value={values.first_name}
                                placeholder='Enter First Name'
                                onChangeText={handleChange('first_name')}
                                label="First Name"
                                errorMessage={errors.first_name}
                            />

                            <Input
                                value={values.middle_name}
                                placeholder='Enter Middle Name'
                                label="Middle Name"
                                onChangeText={handleChange('middle_name')}
                                errorMessage={errors.middle_name}
                            />
                            <Input
                                value={values.last_name}
                                placeholder='Enter Last Name'
                                onChangeText={handleChange('last_name')}
                                label="Last Name"
                                errorMessage={errors.last_name}
                            />

                            <Input value={values.dob}
                                placeholder='Enter Date of Birth'
                                label='Date of Birth'
                                style={{ flexGrow: 1 }}
                                rightIcon={<Icon onPress={showDatepicker} name={'calendar'} type='antdesign' size={36} />}
                                editable={false}
                                errorMessage={errors.dob}
                            />

                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode='date'
                                    // is24Hour={true}
                                    onChange={(event: any, currentDate: moment.MomentInput) => {
                                        onChange(event, currentDate);
                                        setFieldValue('dob', moment(currentDate).format("DD-MM-YYYY"));
                                    }}
                                    maximumDate={new Date()}
                                />
                            )}

                            <Input
                                value={values.email}
                                placeholder='Enter Email'
                                onChangeText={handleChange('email')}
                                label="Email"
                                inputMode='email'
                                textContentType='emailAddress'
                            />
                            <Input
                                value={values.mobile}
                                placeholder='Enter Mobile Number'
                                onChangeText={handleChange('mobile')}
                                label="Mobile Number"
                                keyboardType='phone-pad'
                                inputMode='tel'
                            />
                            <Text>Branch</Text>
                            <SelectDropdown
                                data={["CSE", "ISE", "ECE", "EEE"]}
                                onSelect={(selection, index) => {
                                    setFieldValue('branch', selection)
                                }}
                                defaultButtonText='Select Branch'
                            />
                            <Input
                                label="Tenth Percentage"
                                placeholder='Enter 10th Percentages'
                                value={`${values.tenth_percentage}`}
                                onChangeText={handleChange('tenth_percentage')}
                                inputMode='decimal'
                                keyboardType='decimal-pad'
                            />
                            <Input
                                label="Twelfth Percentage"
                                placeholder='Enter 12th Percentages'
                                value={`${values.twelfth_percentage}`}
                                onChangeText={handleChange('twelfth_percentage')}
                                inputMode='decimal'
                                keyboardType='decimal-pad'
                            />

                            <Input
                                label="UG CGPA"
                                placeholder='Enter UG CGPA'
                                value={`${values.ug_cgpa}`}
                                onChangeText={handleChange('ug_cgpa')}
                                inputMode='decimal'
                                keyboardType='decimal-pad'
                            />

                            <Button onPress={() => { handleSubmit() }}>Submit</Button>
                        </View>
                    )
                }
            </Formik>


        </ScrollView>
        </View>
    )
}

export default AddStudent

const styles = StyleSheet.create({})