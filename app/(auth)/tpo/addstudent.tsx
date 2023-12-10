import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { } from 'formik';

import { TextInput, RadioButton, Button } from 'react-native-paper';


import DateTimePicker from '@react-native-community/datetimepicker';



const AddStudent = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (<>
        <View style={styles.mainContainer}>

            <TextInput
                label={'USN'}
                placeholder='Enter USN'
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

            <Button onPress={showDatepicker}>Date</Button>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
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