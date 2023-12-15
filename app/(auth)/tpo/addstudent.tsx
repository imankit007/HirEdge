import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { useFormik } from 'formik';

import { TextInput, RadioButton, } from 'react-native-paper';
import * as Yup from 'yup';

import DateTimePicker from '@react-native-community/datetimepicker';

const validationSchema = Yup.object({
    usn: Yup.string().required("USN Required")
})

const AddStudent = () => {

    const formik = useFormik({
        initialValues: {
            usn: '',
            first_name: '',
            middle_name: '',
            last_name: '',
            dob: '',
            gender: '',
            branch: '',
            tenth_percentage: '',
            twelfth_percentage: '',
            ug_cgpa: '',
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        console.log(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (<>
        <View style={styles.mainContainer}>

            <TextInput
                label={'USN'}
                placeholder='Enter USN'
                value={formik.values.usn}
                error={formik.touched.usn && Boolean(formik.errors.usn)}
            />

            <TextInput
                label={'First Name'}
                placeholder='Enter First Name'
            />

            <TextInput
                placeholder='Enter middle Name'
            />

            <TextInput
                placeholder='Enter Last Name'
            />

            <Button onPress={showDatepicker} title='Date' />

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    // is24Hour={true}
                    onChange={onChange}
                />
            )}



            <RadioButton.Item
                label='Male'
                value='male'
            />
            <RadioButton.Item
                label='Female'
                value='female'
            />

            <TextInput
                placeholder='Enter Branch'
            />

            <Button onPress={formik.handleSubmit} title='Submit' />

        </View>
    </>)

}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFC0D9'
    },

})




export default AddStudent;