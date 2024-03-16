import { KeyboardAvoidingView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import { Button, Icon, Input, Overlay } from '@rneui/themed'
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import SelectDropdown from 'react-native-select-dropdown'
import { RadioButton } from 'react-native-paper'
import { Phone, Radio } from 'react-native-feather'
import useAxiosPrivate from '../../../utils/axiosPrivate'

import * as Yup from 'yup';

const valdationSchema = Yup.object({
    usn: Yup.string().required("USN is required").matches(/2[sS][dD][0-9]{2}[A-Z,a-z]{2}[0-9]{3}/, "Invalid USN"),
    first_name: Yup.string().required("First name is required"),
    middle_name: Yup.string(),
    last_name: Yup.string(),
    dob: Yup.date().required("Date of Birth is required"),
    gender: Yup.string().oneOf(['male', 'female', 'other']).required("Gender is required"),
    branch: Yup.string().required("Branch is required"),
    email: Yup.string().email().required("Email is required"),
    mobile: Yup.number().min(1000000000).max(9999999999).required("Mobile No is required"),
    tenth_percentage: Yup.number().required("10th Percentage is required").min(1).max(100).typeError('Must be a number'),
    twelfth_percentage: Yup.number().required("12th Percentage is required").typeError('Must be a number'),
    ug_cgpa: Yup.number().min(0).max(10).required("UG CGPA is required").typeError('Must be a number'),

})

interface StudentForm {
    usn: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    dob: string;
    gender: string;
    mobile: string;
    email: string;
    branch: string;
    tenth_percentage: string;
    twelfth_percentage: string;
    ug_cgpa: string;

}




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
    const api = useAxiosPrivate();

    const initialValues: StudentForm = {
        usn: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        dob: '',
        gender: '',
        mobile: '',
        email: '',
        branch: '',
        tenth_percentage: '',
        twelfth_percentage: '',
        ug_cgpa: '',
    }

    return (

        <View style={{
            flex: 1
        }}>
            <ScrollView >
                <KeyboardAvoidingView >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={valdationSchema}
                onSubmit={(values, helpers) => {
                    api.post('/tpo/students', values).then(res => {
                        if (res.status == 200) {
                            ToastAndroid.show("Student Added Successfully", ToastAndroid.SHORT);
                            helpers.resetForm();
                        } else {
                            ToastAndroid.show("Something went wrong!!", ToastAndroid.SHORT);
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }}

            >
                {
                            ({ values, errors, handleChange, handleSubmit, setFieldValue, isValid }) => (
                        <View>

                            <Input
                                value={values.usn}
                                placeholder='Enter USN'
                                onChangeText={handleChange('usn')}
                                label="USN"
                                errorMessage={errors.usn}
                                maxLength={25}
                            />

                            <Input
                                value={values.first_name}
                                placeholder='Enter First Name'
                                onChangeText={handleChange('first_name')}
                                label="First Name"
                                errorMessage={errors.first_name}
                                maxLength={25}
                            />

                            <Input
                                value={values.middle_name}
                                placeholder='Enter Middle Name'
                                label="Middle Name"
                                onChangeText={handleChange('middle_name')}
                                errorMessage={errors.middle_name}
                                maxLength={25}
                            />
                            <Input
                                value={values.last_name}
                                placeholder='Enter Last Name'
                                onChangeText={handleChange('last_name')}
                                label="Last Name"
                                errorMessage={errors.last_name}
                                maxLength={25}
                            />

                            <Input value={values.dob}
                                placeholder='Enter Date of Birth'
                                label='Date of Birth'
                                style={{ flexGrow: 1 }}
                                rightIcon={<Icon onPress={showDatepicker} name={'calendar'} type='antdesign' size={36} />}
                                editable={false}
                                errorMessage={errors.dob}
                            />
                                    {/*
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
                                    )} */}
                            <Text>Gender</Text>
                            <RadioButton.Group onValueChange={(value) => setFieldValue('gender', value)} value={values.gender} >
                                {errors.gender && <Text style={styles.errorMessage}>{errors.gender}</Text>}
                                <RadioButton.Item value='male' label='Male' />
                                <RadioButton.Item value='female' label='Female' />
                            </RadioButton.Group>

                            <Input
                                value={values.email}
                                placeholder='Enter Email'
                                onChangeText={handleChange('email')}
                                label="Email"
                                inputMode='email'
                                textContentType='emailAddress'
                                errorMessage={errors.email}
                            />
                            <Input
                                value={values.mobile}
                                placeholder='Enter Mobile Number'
                                onChangeText={handleChange('mobile')}
                                label="Mobile Number"
                                keyboardType='phone-pad'
                                inputMode='tel'
                                errorMessage={errors.mobile}
                            />
                            <Text>Branch</Text>
                            <SelectDropdown
                                data={["CSE", "ISE", "ECE", "EEE"]}
                                onSelect={(selection, index) => {
                                    setFieldValue('branch', selection)
                                }}
                                defaultButtonText='Select Branch'
                            />
                            {errors.branch && <Text style={styles.errorMessage}>{errors.branch}</Text>}
                            <Input
                                label="Tenth Percentage"
                                placeholder='Enter 10th Percentages'
                                value={`${values.tenth_percentage}`}
                                onChangeText={handleChange('tenth_percentage')}
                                inputMode='decimal'
                                keyboardType='decimal-pad'
                                errorMessage={errors.tenth_percentage}
                            />
                            <Input
                                label="Twelfth Percentage"
                                placeholder='Enter 12th Percentages'
                                value={`${values.twelfth_percentage}`}
                                onChangeText={handleChange('twelfth_percentage')}
                                inputMode='decimal'
                                keyboardType='decimal-pad'
                                errorMessage={errors.twelfth_percentage}
                            />

                            <Input
                                label="UG CGPA"
                                placeholder='Enter UG CGPA'
                                value={`${values.ug_cgpa}`}
                                onChangeText={handleChange('ug_cgpa')}
                                inputMode='decimal'
                                keyboardType='decimal-pad'
                                errorMessage={errors.ug_cgpa}
                            />

                            <Button onPress={() => { handleSubmit() }} disabled={!isValid}>Submit</Button>
                        </View>
                    )
                }
            </Formik>

                </KeyboardAvoidingView>
        </ScrollView>
        </View>
    )
}

export default AddStudent

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red'
    }
})