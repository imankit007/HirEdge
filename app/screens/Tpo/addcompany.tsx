
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TurboModuleRegistry, Button } from "react-native";
import { TextInput } from "react-native";
import useAxiosPrivate from "../../utils/axiosPrivate";
import { Field, FieldArray, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import CheckBox from 'expo-checkbox';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

let branchList = ['CSE', 'ISE', 'ECE', 'EEE', 'CHEM', 'CIVIL', 'AI/ML', 'MECH']

const validationSchema = Yup.object({

})


const FirstPage = () => {

    const api = useAxiosPrivate();

    const [isThereTenthEligibilityCriteria, setIsThereTenthEligibilityCriteria] = useState(true);
    const [isThereTwelfthEligibilityCriteria, setIsThereTwelfthEligibilityCriteria] = useState(true);
    const [isThereUgEligibilityCriteria, setIsThereUgEligibilityCriteria] = useState(true);


    return (
        <>
            <ScrollView style={styles.mainContainer} contentContainerStyle={{
                rowGap: 5,
                flex: 1,
            }}><Formik
                initialValues={{
                    company_name: '',
                    job_title: '',
                    job_description: '',
                    tenth_cutoff: 70,
                    twelfth_cutoff: 70,
                    ug_cutoff: 7.00,
                    branch: [],
                }}
                onSubmit={(values, formikHelpers) => {
                    api.post('tpo/addjob', values).then((res) => {
                        if (res.status == 200) {
                            console.log("Posted Successfull");
                            formikHelpers.resetForm();
                        }
                    }).catch((e) => {
                        console.log(e);
                    })
                }}
            >{props => (
                <View style={{
                    flex: 1,
                    flexGrow: 1,
                    rowGap: 3,
                    borderColor: 'black',
                    borderWidth: 1
                }}>
                    <TextInput
                        placeholder={"Company Name"}
                        value={props.values.company_name}
                        onChangeText={props.handleChange("company_name")}
                    />
                    <TextInput
                        placeholder={"Job Title"}
                        value={props.values.job_title}
                        onChangeText={props.handleChange("job_title")}
                    />
                    <TextInput
                        placeholder={'Job Description'}
                        value={props.values.job_description}
                        onChangeText={props.handleChange('job_description')}
                    ></TextInput>
                    <Text>Branch</Text>
                    <FieldArray name="branch">
                        {
                            arrayHelpers => (
                                <View style={{ flex: 1 }}>
                                    <View style={{
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'row',
                                        flexWrap: "wrap",
                                        flexGrow: 2,
                                        rowGap: 5,
                                        columnGap: 5
                                    }}>
                                        {
                                            props.values.branch.length > 0 &&
                                            props.values.branch.map((br, index) => (
                                                <View style={{
                                                    width: 'auto',
                                                    height: 40,
                                                    borderStyle: 'solid',
                                                    borderColor: 'black',
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    justifyContent: 'center'

                                                }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            branchList.push(br)
                                                            arrayHelpers.remove(index);

                                                        }}
                                                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 8 }}>
                                                        <Icon.Button name="delete" style={{
                                                            margin: 0,
                                                        }} />
                                                        <Text style={{ margin: 0, textTransform: 'uppercase' }}>{br}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                            )
                                        }
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'row',
                                        flexWrap: "wrap",
                                        flexGrow: 2,
                                        rowGap: 5, columnGap: 5
                                    }}>{
                                            branchList.map((val, index) => (
                                                <View style={{
                                                    width: 'auto',
                                                    height: 40,
                                                    borderStyle: 'solid',
                                                    borderColor: 'black',
                                                    borderWidth: 1,
                                                    borderRadius: 20,
                                                    justifyContent: 'center'

                                                }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            arrayHelpers.push(val);
                                                            branchList = branchList.filter((item) => (item !== val))
                                                        }}
                                                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 8 }}>
                                                        <Icon.Button name="plus" style={{
                                                            margin: 0,
                                                        }} />
                                                        <Text style={{ margin: 0 }}>{val}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            ))
                                        }
                                    </View>
                                </View>
                            )
                        }
                    </FieldArray>


                    <View style={{ marginVertical: 10, rowGap: 10 }}>
                        <Text style={{
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>Eligibility Criteria</Text>
                        <View style={{ flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>

                            <CheckBox style={{}} value={isThereTenthEligibilityCriteria} onValueChange={() => {
                                if (isThereTenthEligibilityCriteria)
                                    props.setFieldValue('tenth_cutoff', 0);
                                else
                                    props.setFieldValue('tenth_cutoff', 70);
                                setIsThereTenthEligibilityCriteria((prev) => !prev);

                            }} /><Text>10th Criteria</Text>

                            <Icon.Button name={"minus"} onPress={() => {
                                props.setFieldValue('tenth_cutoff', props.values.tenth_cutoff == 0 ? 0 : props.values.tenth_cutoff - 1)
                            }} />
                            <TextInput
                                placeholder={"Percentage"}
                                value={`${props.values.tenth_cutoff}%`}
                                style={{
                                    textAlign: 'center'
                                }}
                                editable={false}
                            />
                            <Icon.Button name={"plus"} onPress={() => {
                                props.setFieldValue('tenth_cutoff', props.values.tenth_cutoff == 100 ? 100 : props.values.tenth_cutoff + 1)
                            }} />
                        </View>
                        <View style={{ flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>

                            <CheckBox style={{}} value={isThereTwelfthEligibilityCriteria} onValueChange={() => {
                                if (isThereTwelfthEligibilityCriteria)
                                    props.setFieldValue('twelfth_cutoff', 0);
                                else
                                    props.setFieldValue('twelfth_cutoff', 70);
                                setIsThereTwelfthEligibilityCriteria((prev) => !prev);

                            }} /><Text>12th Criteria</Text>

                            <Icon.Button name={"minus"} onPress={() => {
                                props.setFieldValue('twelfth_cutoff', props.values.twelfth_cutoff == 0 ? 0 : props.values.twelfth_cutoff - 1)
                            }} />
                            <TextInput
                                placeholder={"Percentage"}
                                value={`${props.values.twelfth_cutoff}%`}
                                editable={false}
                                style={{
                                    textAlign: 'center'
                                }}

                            />
                            <Icon.Button name={"plus"} onPress={() => {
                                props.setFieldValue('tenth_cutoff', props.values.twelfth_cutoff == 100 ? 100 : props.values.twelfth_cutoff + 1)
                            }} />
                        </View>
                        <View style={{ flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>

                            <CheckBox style={{}} value={isThereUgEligibilityCriteria} onValueChange={() => {
                                if (isThereUgEligibilityCriteria)
                                    props.setFieldValue('ug_cutoff', 0.00);
                                else
                                    props.setFieldValue('ug_cutoff', 7.00);
                                setIsThereUgEligibilityCriteria((prev) => !prev);

                            }} /><Text>UG Criteria</Text>

                            <Icon.Button name={"minus"} onPress={() => {
                                props.setFieldValue('ug_cutoff', props.values.ug_cutoff == 0.00 ? 0.00 : props.values.ug_cutoff - 0.01)
                            }} />
                            <TextInput
                                placeholder={"CGPA"}
                                value={`${props.values.ug_cutoff.toFixed(2)}`}
                                editable={false}
                                style={{
                                    textAlign: 'center'
                                }}
                            />
                            <Icon.Button name={"plus"} onPress={() => {
                                props.setFieldValue('ug_cutoff', props.values.ug_cutoff == 10.00 ? 10.00 : props.values.ug_cutoff + 0.01)
                            }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'blue', height: 80 }}>
                        <Text adjustsFontSizeToFit style={{ fontSize: 26 }}>
                            Here there will be option to upload documents related to drive.
                            Keep this space
                        </Text>
                    </View>


                    <Button
                        onPress={props.handleSubmit as any}
                        title="Submit"
                    ></Button>
                </View>
            )
                    }
                </Formik>
            </ScrollView></>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexGrow: 1,
    }
})

export default FirstPage;