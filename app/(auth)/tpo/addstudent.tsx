import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { useFormik } from 'formik';

import { TextInput, RadioButton, IconButton, } from 'react-native-paper';
import * as Yup from 'yup';

import DateTimePicker from '@react-native-community/datetimepicker';

import DropDown from 'react-native-paper-dropdown';
import moment from 'moment';

import useAxiosPrivate from '../../../utils/axiosPrivate';

const BRANCHLIST = [
    {
        label: 'CSE - Computer Science Engineering',
        value: 'cse'
    }, {
        label: "ISE - Inforamtion Science Engieering",
        value: 'ise'
    }
]


const validationSchema = Yup.object({
    usn: Yup.string().required("USN Required").matches(/2[sS][dD][0-9]{2}[A-Z,a-z]{2}[0-9]{3}/gm, "Invalid USN"),
    first_name: Yup.string().required("First Name Required").min(2, "Invalid Input"),
    middle_name: Yup.string(),
    last_name: Yup.string(),
    dob: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().oneOf(['male', 'female', 'other']),
    branch: Yup.string().required("Branch Required"),
    tenth_percentage: Yup.number().required("10th Percentage Required"),
    twelfth_percentage: Yup.number().required("12th Percentage Required")
})



const AddStudent = () => {

    const [genderMenu, setGenderMenu] = useState(false);
    const [branchMenu, setBranchMenu] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        formik.setFieldValue('dob', moment(currentDate).format("DD-MM-YYYY"));
    };
    const showDatepicker = () => {
        setShow(true);
    };

    const api = useAxiosPrivate();

    const formik = useFormik({
        initialValues: {
            usn: '',
            first_name: '',
            middle_name: '',
            last_name: '',
            dob: '',
            gender: '', mobile: '', email: '',
            branch: '',
            tenth_percentage: '',
            twelfth_percentage: '',
            ug_cgpa: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            api.post('/tpo/addstudent', values).then(res => {
                if (res.status == 200) {
                    console.log("Studente Added Successfully")
                    formik.resetForm();
                } else {
                    console.log("Something went wrong!!");
                }
            }).catch((e) => {
                console.log(e);
            })
        },
        onReset: () => { 

        }
    })



    return (<ScrollView style={{backgroundColor:'#5A5A5A'}}>
        <View style={styles.mainContainer}>

            <TextInput
                label={'USN'}
                placeholder='Enter USN'
                value={formik.values.usn}
                onChangeText={formik.handleChange('usn')}
                error={formik.touched.usn && Boolean(formik.errors.usn)}
                style={styles.formField}
            />

            <TextInput
                label={'First Name'}
                placeholder='Enter First Name'
                value={formik.values.first_name}
                onChangeText={formik.handleChange('first_name')}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                style={styles.formField}
            />

            <TextInput
                label={'Middle Name'}  
                placeholder='Enter middle Name'
                value={formik.values.middle_name}
                onChangeText={formik.handleChange('middle_name')}
                error={formik.touched.middle_name && Boolean(formik.errors.middle_name)}
                style={styles.formField}

            />

            <TextInput
                label={"Last Name"}
                placeholder='Enter Last Name'
                value={formik.values.last_name}
                onChangeText={formik.handleChange('last_name')}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                style={styles.formField}

            />

            <TouchableOpacity
                onPress={showDatepicker}
                style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: Boolean(formik.errors.dob) ? 'red' : '',
                }}

            >
                <TextInput value={formik.values.dob || "Enter Date of Birth"} disabled
                    style={{ flexGrow: 1 }}
                    textColor='black'
                />
                <IconButton icon={'calendar'} size={36} iconColor='darkblue' />
            </TouchableOpacity>


            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    // is24Hour={true}
                    onChange={onChange}
                />
            )}

            <DropDown
                label='Gender'
                mode='outlined'
                visible={genderMenu}
                showDropDown={() => { setGenderMenu(true) }}
                onDismiss={() => { setGenderMenu(false) }}
                setValue={(value) => { formik.setFieldValue('gender', value) }}
                value={formik.values.gender}
                list={[{ label: 'Male', value: "male" }, { label: 'Female', value: 'female' }, {
                    label: 'Other', value: 'other'
                }]}
            />

            <TextInput
                label={'Mobile'}
                placeholder={'Enter Mobile No.'}
                value={formik.values.mobile}
                onChangeText={formik.handleChange('mobile')}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                style={styles.formField}
            />

            <TextInput
                label={'Email'}
                placeholder='Enter Email address'
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                style={styles.formField}
            />

            <DropDown
                label='Branch'
                mode='outlined'
                visible={branchMenu}
                showDropDown={() => setBranchMenu(true)}
                onDismiss={() => setBranchMenu(false)}
                setValue={(value) => formik.setFieldValue('branch', value)}
                value={formik.values.branch}
                list={BRANCHLIST}
            />

            <TextInput
                label={"10th Percentage"}
                placeholder='Enter 10th Percentage'
                value={formik.values.tenth_percentage}
                onChangeText={formik.handleChange('tenth_percentage')}
                error={formik.touched.tenth_percentage && Boolean(formik.errors.tenth_percentage)}
                style={styles.formField}

            />
            <TextInput
                label={"12th Percentage"}
                placeholder='Enter 12th Percentage'
                value={formik.values.twelfth_percentage}
                onChangeText={formik.handleChange('twelfth_percentage')}
                error={formik.touched.twelfth_percentage && Boolean(formik.errors.twelfth_percentage)}
                style={styles.formField}

            />
            <TextInput
                label={"UG CGPA"}
                placeholder={"Enter UG CGPA"}
                value={formik.values.ug_cgpa}
                onChangeText={formik.handleChange('ug_cgpa')}
                error={formik.touched.ug_cgpa && Boolean(formik.errors.ug_cgpa)}
                style={styles.formField}
            />


            <Button onPress={formik.handleSubmit as any} title='Submit' />

        </View>
    </ScrollView>)

}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#5A5A5A',
        rowGap: 8,
        paddingTop: 4,
        width:'90%',
        alignSelf:'center'
    },
    formField: {
        backgroundColor: 'white',
        borderRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderBottomleftRadius:10,
        padding:5
    },


})




export default AddStudent;