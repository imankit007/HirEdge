import { StyleSheet, TouchableOpacity, View, Dimensions, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, CheckBox, Icon, Input, Text } from '@rneui/themed'
import * as Yup from 'yup';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { useDebounce } from '@uidotdev/usehooks'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { ToastAndroid } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import * as DocumentPicker from 'expo-document-picker'



interface AddDriveValues {
    company_id: string,
    company_name: string;
    tier: number | null;
    job_title: string,
    job_description: string,
    job_ctc: string,
    job_locations: Array<string>,
    tenth_cutoff: number,
    twelfth_cutoff: number,
    ug_cutoff: number,
    branch: {
        CSE: boolean,
        ISE: boolean,
        ECE: boolean,
        MECH: boolean,
        CIVIL: boolean,
        EEE: boolean,
        CHEM: boolean
    },
    rounds: Array<{
        round_details: string,
    }>,
    registration_end_date: Date;
    registration_end_time: Date;
}

type CompaniesProps = {
    readonly title: string,
    readonly id: string,
}


interface CompanyOptionsResponseType {
    metadata: {
        totalCount: number;
        pageCount: number;
        page: 1
    },
    data: Array<CompaniesProps>
}

const validationSchema = Yup.object({
    // company_id: Yup.string().required("Required"),
    // job_title: Yup.string().required("Required"),
    // job_description: Yup.string().required("Required"),
    // job_ctc: Yup.string().required("Required"),
    // tenth_cutoff: Yup.number().min(0).max(100).typeError("Must be a number"),
    // twelfth_cutoff: Yup.number().min(0).max(100).typeError("Must be a number"),
    // ug_cgpa: Yup.number().min(0).max(10).typeError("Must be a number"),

})

const AddDrive = ({ route }: DrawerScreenProps<TPODrawerParamList, "Add Drive">) => {

    const initialValues: AddDriveValues = {
        company_id: "",
        company_name: "",
        tier: 3,
        job_title: "",
        job_description: "",
        job_ctc: "",
        job_locations: [],
        tenth_cutoff: 0,
        twelfth_cutoff: 0,
        ug_cutoff: 0,
        branch: {
            CSE: false,
            ECE: false,
            EEE: false,
            MECH: false,
            CIVIL: false,
            ISE: false,
            CHEM: false,
        },
        rounds: [{
            round_details: "",
        }, {
                round_details: "",
            }, {
                round_details: "",
        }],
        registration_end_date: new Date(),
        registration_end_time: new Date(),
    }
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [search, setSearch] = useState('')

    const s = useDebounce(search, 2000);


    const showTimepicker = () => {
        setShowTime(true);
    };



    const api = useAxiosPrivate();

    const { data, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: ["fetchCompanies", s],
        queryFn: ({ pageParam }): Promise<CompanyOptionsResponseType> => (
            api.get('/common/options/companies', {
                params: {
                    s: s
                }
            }).then(res => res.data.companies)
        ),
        getNextPageParam: (lastPage) => {

            if (lastPage.metadata.page < lastPage.metadata.pageCount)
                return lastPage.metadata.page + 1;
            return undefined;
        },
        initialPageParam: 1
    });
    const searchRef = useRef(null)
    const dropdownController = useRef<any>(null)
    const [file, setFile] = useState<DocumentPicker.DocumentPickerAsset>();

    return (
        <ScrollView>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, helpers) => {

                    const data = new FormData();

                    var doc = { name: file?.name, uri: file?.uri, type: file?.mimeType };
                    data.append('job_description_file', doc as any)
                    console.log(values);
                    // api.post('/tpo/drives/upload', data, {
                    //     withCredentials: true,
                    //     headers: {
                    //         'Content-Type': 'multipart/form-data'
                    //     }
                    // }).then(res => {
                    //     if (res.status == 200) {
                    //     }
                    // }).catch(err => {
                    //     ToastAndroid.show('Something went Wrong...!!', ToastAndroid.SHORT);
                    //     console.log(err);
                    // })
                    api.post('/tpo/drives', values).then(res => {
                        if (res.status == 200) {
                            ToastAndroid.show('Drive Posted Successfully', ToastAndroid.SHORT);
                            // helpers.resetForm();
                        }
                    }).catch(err => {
                        ToastAndroid.show('Something went Wrong...!!', ToastAndroid.SHORT);
                        console.log(err);
                    })  
                }}
                validationSchema={validationSchema}
            >
                {
                    ({ values, errors, handleChange, handleSubmit, setFieldValue }) => (<View style={{
                        backgroundColor: 'white'
                    }}>
                        <View style={{
                            zIndex: 1
                        }}>
                            <Text >Select Company Name</Text>
                            <AutocompleteDropdown
                                textInputProps={{
                                    placeholder: "Select Company",
                                }}
                                ref={searchRef}
                                controller={controller => {
                                    dropdownController.current = controller
                                }}
                                dataSet={data?.pages.flatMap((page) => page.data)}
                                suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                                onChangeText={setSearch}
                                loading={isLoading}
                                onSelectItem={(item) => {
                                    item && setFieldValue('company_id', item.id);
                                    item && setFieldValue('company_name', item.title);
                                }}
                                debounce={2000}
                                showChevron
                                useFilter={false}
                                emptyResultText='Nothing Found'
                                containerStyle={{
                                    backgroundColor: 'white',
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    paddingHorizontal: 5,
                                    marginHorizontal: 10
                                }}
                                inputContainerStyle={{
                                    backgroundColor: 'white'
                                }}
                            /> 
                        </View>

                        <Input
                            value={values.job_title}
                            onChangeText={handleChange('job_title')}
                            placeholder='Enter Job Title'
                            label="Job Title"
                            errorMessage={errors.job_title}
                        />
                        <Input
                            value={values.job_ctc}
                            onChangeText={handleChange('job_ctc')}
                            placeholder='Enter CTC'
                            label="CTC"
                            errorMessage={errors.job_ctc}
                            style={{
                                backgroundColor: 'white'
                            }}
                            containerStyle={{
                                backgroundColor: 'white'
                            }}
                        />
                        <Text>Tier</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                borderWidth: 1,
                                borderColor: 'gray',
                                marginHorizontal: 5
                            }}>
                            <CheckBox
                                checked={values.tier === 1}
                                onPress={() => { setFieldValue('tier', 1) }}
                                title={"Tier - I"}
                            />
                            <CheckBox
                                checked={values.tier === 2}
                                onPress={() => { setFieldValue('tier', 2) }}
                                title={"Tier - II"}
                            />
                            <CheckBox
                                checked={values.tier === 3}
                                onPress={() => { setFieldValue('tier', 3) }}
                                title={"Tier - III"}
                            />
                            <CheckBox
                                checked={values.tier === 0}
                                onPress={() => { setFieldValue('tier', 0) }}
                                title={"Dream"}
                            />

                        </View>

                        <Text>Branch</Text>

                        <View style={{
                            marginVertical: 5,
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: 'gray',
                            marginHorizontal: 5
                        }}> 

                            <CheckBox
                                checked={values.branch.CSE}
                                title={"CSE"}
                                onPress={() => { setFieldValue('branch.CSE', !values.branch.CSE) }}
                            />
                            <CheckBox
                                checked={values.branch.ISE}
                                title={"ISE"}
                                onPress={() => { setFieldValue('branch.ISE', !values.branch.ISE) }}
                            />
                            <CheckBox
                                checked={values.branch.ECE}
                                title={"ECE"}
                                onPress={() => { setFieldValue('branch.ECE', !values.branch.ECE) }}
                            />
                            <CheckBox
                                checked={values.branch.EEE}
                                title={"EEE"}
                                onPress={() => { setFieldValue('branch.EEE', !values.branch.EEE) }}
                            />
                            <CheckBox
                                checked={values.branch.MECH}
                                title={"MECH"}
                                onPress={() => { setFieldValue('branch.MECH', !values.branch.MECH) }}
                            />
                            <CheckBox
                                checked={values.branch.CIVIL}
                                title={"CIVIL"}
                                onPress={() => { setFieldValue('branch.CIVIL', !values.branch.CIVIL) }}
                            />
                            <CheckBox
                                checked={values.branch.CHEM}
                                title={"CHEM"}
                                onPress={() => { setFieldValue('branch.CHEM', !values.branch.CHEM) }}
                            />


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
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',
                                                }}>
                                                    <Text> Round - {index + +1}</Text>
                                                    <Input
                                                        value={round?.round_details}
                                                        onChangeText={handleChange(`rounds[${index}.round_details]`)}
                                                        placeholder='Enter Round Details'
                                                        label="Round Details"
                                                        containerStyle={{
                                                            width: "100%"
                                                        }}
                                                        rightIcon={<Icon name="delete" onPress={arrayHelpers.handleRemove(index)} />}
                                                    />
                                                </View>)
                                        })
                                    }

                                    <Button onPress={() => {
                                        arrayHelpers.push({
                                            round_name: '',
                                        })
                                    }}
                                    >Add Round Details</Button>
                                </View>)
                            }
                        </FieldArray>
                        <View style={{
                        }}>


                            <Input
                                value={values.registration_end_date.toLocaleDateString()}
                                rightIcon={<Icon name='calendar' type='antdesign' onPress={() => {
                                    setShowDate(true);
                                }} />}
                                label={"Registration End Date"}
                            />

                            <Input
                                value={values.registration_end_time.toLocaleTimeString()}
                                rightIcon={<Icon name='clockcircleo' type='antdesign' onPress={() => {
                                    setShowTime(true);
                                }} />}
                                label={"Registration End Time"}
                            />
                        </View>
                        {
                            showDate && <DateTimePicker
                                value={values.registration_end_date || new Date()}
                                mode='date' minimumDate={new Date()}
                                onChange={(_, date) => {
                                    if (date) {
                                        setFieldValue('registration_end_date', date);
                                    }
                                    setShowDate(false);
                                }}

                            />
                        }
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
                                    textAlignVertical: 'bottom'
                                }}
                            />

                        </ScrollView>
                        {
                            showTime && <DateTimePicker
                                value={values.registration_end_time || new Date()}
                                mode={'time'}
                                onChange={(_, date) => {
                                    if (date) {
                                        setFieldValue('registration_end_time', date);

                                    }
                                    setShowTime(false);
                                }}

                            />
                        }

                        <Button color={'success'}
                            onPress={() => {
                                handleSubmit();
                            }}
                        >Submit</Button>
                    </View>

                    )

                }  
            </Formik>


        </ScrollView>
    )
}

export default AddDrive

const styles = StyleSheet.create({
    errorMessageStyle: {
        color: 'red'
    }
})