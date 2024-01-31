import { StyleSheet, ToastAndroid, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { FieldArray, Formik, useFormikContext } from 'formik'
import { Button, CheckBox, Icon, Input, Text } from '@rneui/themed'
import * as Yup from 'yup';

import DateTimePicker from '@react-native-community/datetimepicker'

import { useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'


interface AddDriveValues {
    company_id: string,
    job_title: string,
    job_description: string,
    job_ctc: string,
    job_locations: Array<string>,
    tenth_cutoff: number,
    twelfth_cutoff: number,
    ug_cutoff: number,
    branch: Array<string>,
    rounds: Array<{
        round_name: string,
        round_date: string,
        round_time: string
    }>
}

type CompaniesProps = {
    readonly title: string,
    readonly id: string,
}

type CompanyList = CompaniesProps[];

const validationSchema = Yup.object({
    company_id: Yup.string().required("Required"),
    job_title: Yup.string().required("Required"),
    job_description: Yup.string().required("Required"),
    job_ctc: Yup.string().required("Required"),
    tenth_cutoff: Yup.number().min(0).max(100).typeError("Must be a number"),
    twelfth_cutoff: Yup.number().min(0).max(100).typeError("Must be a number"),
    ug_cgpa: Yup.number().min(0).max(10).typeError("Must be a number"),
})

const AddDrive = () => {

    const initialValues: AddDriveValues = {
        company_id: "",
        job_title: "",
        job_description: "",
        job_ctc: "",
        job_locations: [],
        tenth_cutoff: 70,
        twelfth_cutoff: 70,
        ug_cutoff: 7,
        branch: [],
        rounds: [],
    }

    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const selectedindex = useRef(0);

    const [search, setSearch] = useState('')


    const showDatepicker = () => {
        setShowDate(true);
    };

    const showTimepicker = () => {
        setShowTime(true);
    };

    const branchlist = [{
        id: "CSE",
        name: 'CSE'
    }, {
        id: 'ISE',
        name: 'ISE'
    }, {
        id: 'ECE',
        name: 'ECE'
    }, {
        id: 'EEE',
        name: 'EEE'
    }, {
        id: 'MECH',
        name: 'MECH'
    }, {
        id: 'CIVIL',
        name: 'CIVIL'
    }, {
        id: 'CHEM',
        name: 'CHEM'
    }]

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchCompanies", search],
        queryFn: (): Promise<CompanyList> => (
            api.get('/common/companies', {
                params: {
                    search: search
                }
            }).then(res => res.data)
        )
    })
    const searchRef = useRef(null)
    const dropdownController = useRef<any>(null)
    return (
        <ScrollView>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, helpers) => {
                    console.log(JSON.stringify(values));
                    api.post('/tpo/drive', values).then(res => {
                        if (res.status == 200) {
                            ToastAndroid.show('Drive Posted Successfully', ToastAndroid.SHORT);
                        }
                    }).catch(err => {
                        ToastAndroid.show('Something went Wrong...!!', ToastAndroid.SHORT);
                        console.log(err);
                    })


                }}
                validationSchema={validationSchema}
                validateOnChange={false}
            >
                {
                    ({ values, errors, handleChange, handleSubmit, setFieldValue }) => (<View style={{
                    }}>


                        <View style={{
                            zIndex: 1
                        }}>
                            <Text >Select Company Name</Text>
                            <AutocompleteDropdown
                                ref={searchRef}
                                controller={controller => {
                                    dropdownController.current = controller
                                }}
                                suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                                dataSet={result.data}
                                onChangeText={setSearch}
                                loading={result.isLoading}
                                onSelectItem={(item) => {
                                    item && setFieldValue('company_id', item.id)
                                }}
                                debounce={2000}
                                showChevron
                                useFilter={false}
                                emptyResultText='Nothing Found'
                            />
                        </View>

                        <Input
                            value={values.job_title}
                            onChangeText={handleChange('job_title')}
                            placeholder='Enter Job Title'
                            label="Job Title"
                            errorMessage={errors.job_title}
                        />
                        <ScrollView style={{
                            minHeight: 200,
                            maxHeight: Dimensions.get('window').height * 0.4,
                        }}>

                            <Input
                                multiline
                                value={values.job_description}
                                onChangeText={handleChange('job_description')}
                                placeholder='Enter Job Description'
                                label="Job Description"
                                errorMessage={errors.job_description}
                                scrollEnabled
                                inputStyle={{
                                    minHeight: 150,
                                    maxHeight: 250,
                                }}
                            />

                        </ScrollView>

                        <Input
                            value={values.job_ctc}
                            onChangeText={handleChange('job_ctc')}
                            placeholder='Enter CTC'
                            label="CTC"
                            errorMessage={errors.job_ctc}
                        />

                        <View style={{
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}>

                            {
                                branchlist.map((item, index) => {
                                    return (
                                        <CheckBox
                                            key={index}
                                            checked={values.branch.includes(item.id)}
                                            onPress={() => {
                                                if (values.branch.includes(item.id)) {
                                                    setFieldValue('branch', values.branch.filter(branch => branch !== item.id));
                                                }
                                                else {
                                                    setFieldValue('branch', [...values.branch, item.id]);
                                                }
                                            }}
                                            title={item.id}
                                            containerStyle={{
                                                // backgroundColor: '#ffffff00',
                                                width: 100
                                            }}
                                        />
                                    )

                                })
                            }

                        </View>
                        <Input
                            label="10th Percentage"
                            value={values.tenth_cutoff.toString()}
                            keyboardType='decimal-pad'
                            onChangeText={handleChange('tenth_cutoff')}
                            inputMode='decimal'
                            errorMessage={errors.tenth_cutoff}
                            leftIcon={<TouchableOpacity onPress={() => {
                                setFieldValue('tenth_cutoff', values.tenth_cutoff - 1);
                            }}><Icon name='minuscircleo' type='antdesign' /></TouchableOpacity>
                            }
                            rightIcon={<TouchableOpacity onPress={() => {
                                setFieldValue('tenth_cutoff', values.tenth_cutoff + +1);
                            }}><Icon name='pluscircleo' type='antdesign' /></TouchableOpacity>}
                        />
                        <Input
                            label="12th Percentage"
                            value={values.twelfth_cutoff.toString()}
                            inputMode='decimal'
                            keyboardType='decimal-pad'
                            onChangeText={handleChange('twelfth_cutoff')}
                            errorMessage={errors.twelfth_cutoff}
                            leftIcon={<TouchableOpacity onPress={() => {
                                setFieldValue('twelfth_cutoff', values.twelfth_cutoff - 1)
                            }}><Icon name='minuscircleo' type='antdesign' /></TouchableOpacity>
                            }
                            rightIcon={<TouchableOpacity onPress={() => {
                                setFieldValue('twelfth_cutoff', values.twelfth_cutoff + +1)
                            }}><Icon name='pluscircleo' type='antdesign' /></TouchableOpacity>}
                        />

                        <Input
                            label="UG CGPA"
                            value={values.ug_cutoff.toString()}
                            inputMode='numeric'
                            keyboardType='numeric'
                            onChangeText={handleChange('ug_cutoff')}
                            leftIcon={<TouchableOpacity onPress={() => {
                                if (values.ug_cutoff - 1 > 0.0)
                                    setFieldValue('ug_cutoff', values.ug_cutoff - 1)
                            }}><Icon name='minuscircleo' type='antdesign' /></TouchableOpacity>
                            }
                            rightIcon={<TouchableOpacity onPress={() => {
                                if (values.ug_cutoff + +1 <= 10.0)
                                    setFieldValue('ug_cutoff', values.ug_cutoff + +1)
                            }}><Icon name='pluscircleo' type='antdesign' /></TouchableOpacity>}
                            errorMessage={errors.ug_cutoff}

                        />

                        <Text h4>Selection Process</Text>
                        <FieldArray name='rounds'>
                            {
                                (arrayHelpers) => (<View>
                                    {
                                        values.rounds.map((round, index: number) => {
                                            return (
                                                <View key={index} style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',
                                                    borderColor: 'black',
                                                    borderWidth: 1
                                                }}>
                                                    <Text> Round - {index + +1}</Text>
                                                    <Input
                                                        value={round?.round_name}
                                                        onChangeText={handleChange(`rounds[${index}.round_name]`)}
                                                        placeholder='Enter Round Name'
                                                        label="Round Name"
                                                        containerStyle={{
                                                            width: "100%"
                                                        }}
                                                        rightIcon={<Icon name="delete" onPress={arrayHelpers.handleRemove(index)} />}
                                                    />
                                                    <Input value={round.round_date}
                                                        label="Round Date"
                                                        rightIcon={<Icon name='calendar' type='antdesign' onPress={
                                                            () => {
                                                                showDatepicker();
                                                                selectedindex.current = index
                                                            }
                                                        } />}
                                                        containerStyle={{
                                                            width: "50%"
                                                        }}
                                                    />
                                                    <Input
                                                        value={round.round_time}
                                                        label="Round Time"
                                                        containerStyle={{
                                                            width: "50%"
                                                        }}
                                                        rightIcon={<Icon name='clockcircleo' type='antdesign' onPress={() => {
                                                            showTimepicker();
                                                            selectedindex.current = index;
                                                        }} />}
                                                    />
                                                </View>)
                                        })
                                    }

                                    <Button onPress={() => {
                                        arrayHelpers.push({
                                            round_name: '',
                                            round_date: '',
                                            round_time: ''
                                        })
                                    }}
                                    >Add Round Details</Button>
                                </View>)
                            }

                        </FieldArray>

                        <Button color={'success'}
                            onPress={() => {
                                handleSubmit();
                            }}
                        >Submit</Button>

                        {
                            showDate &&
                            <DateTimePicker
                                mode='date'
                                value={new Date()}
                                onChange={(e, date) => {
                                    setShowDate(false);
                                    setFieldValue(`rounds[${selectedindex.current}.round_date]`, date?.toLocaleDateString())
                                }}
                                minimumDate={new Date()}
                            />
                        }
                        {
                            showTime &&
                            <DateTimePicker
                                mode='time'
                                value={new Date()}
                                onChange={(e, date) => {
                                    setShowTime(false); ``
                                    setFieldValue(`rounds[${selectedindex.current}.round_time]`, date?.toLocaleTimeString().slice(0, 5))
                                }}
                            />
                        }
                    </View>)
                }
            </Formik>
        </ScrollView>
    )
}

export default AddDrive

const styles = StyleSheet.create({})