
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox, TextInput, IconButton, Button } from "react-native-paper";

import useAxiosPrivate from "../../../utils/axiosPrivate";
import { Field, FieldArray, Form, Formik, useFormik } from "formik";

import { useState } from "react";


let branchList = ['CSE', 'ISE', 'ECE', 'EEE', 'CHEM', 'CIVIL', 'AI/ML', 'MECH']

const FirstPage = () => {

    const api = useAxiosPrivate();
    const [tenth, setTenth] = useState(false);


    return (
        <>
            <ScrollView style={styles.mainContainer} contentContainerStyle={{
                rowGap: 5
            }}><Formik
                initialValues={{
                    comapny_name: '',
                    job_title: '',
                    tenth_cutoff: 0,
                    twelfth_cutoff: 0,
                    ug_cutoff: 0,
                    branch: [],
                }}
                onSubmit={(values, formikHelpers) => {

                }}
            >{props => (
                <View style={{
                    flex: 1,
                    flexGrow: 1,
                    rowGap: 3
                        }}>
                            <TextInput
                                label={"Company Name"}
                                value={props.values.comapny_name}
                                onChangeText={props.handleChange("company_name")}
                            />
                            <TextInput
                                label={"Job Title"}
                                value={props.values.job_title}
                                onChangeText={props.handleChange("job_title")}
                            />
                            <Text>Branch</Text>
                            <FieldArray name="branch">
                                {
                                    arrayHelpers => (
                                        <View>
                                            <View style={{
                                                display: 'flex',
                                                flex: 1,
                                                flexDirection: 'row',
                                                flexWrap: "wrap",
                                                flexGrow: 2,
                                                rowGap: 5, columnGap: 5

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
                                                                <IconButton icon={"delete"} style={{
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
                                                                <IconButton icon={"plus"} style={{
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


                            <View>
                                <Text>Eligibility Criteria</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap'
                                }}>

                                    <Button icon={"plus"} style={{
                                        width: 'auto'
                                    }}>10th Percentage</Button>

                                    <Button icon={"plus"} style={{}}>12th Percentage</Button>
                                    <Button icon={'plus'} style={{}}>UG CGPA</Button>
                                </View>





                            </View>






                            <Button
                                mode="contained"
                                onPress={props.handleSubmit as any}
                            >Submit
                            </Button>
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
    },
    checkboxItem: {
        width: '50%',
        margin: 0,
        padding: 0,
        maxHeight: 40,
        maxWidth: 160
    }
})

export default FirstPage;