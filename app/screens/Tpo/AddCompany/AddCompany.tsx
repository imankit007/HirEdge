import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/themed'
import useAxiosPrivate from '../../../utils/axiosPrivate'
import * as Yup from 'yup';



const validationSchema = Yup.object({
    company_name: Yup.string().required("Company Name cannot be empty"),
    company_website: Yup.string().url("Must be a valid URL"),
})

const AddCompany = () => {

    const api = useAxiosPrivate();
    return (
        <View>

            <Formik
                initialValues={{
                    company_name: '',
                    company_website: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, formikHelpers) => {
                    api.post('/tpo/companies', values).then((res) => {
                        if (res.status === 200) {
                            ToastAndroid.show('Company Added to Database', ToastAndroid.SHORT);
                            formikHelpers.resetForm();
                        }
                    }).catch((e) => { console.log(e) });
                }}
            >
                {
                    ({ values, errors, handleChange, handleSubmit }) => (<View>
                        <Input
                            value={values.company_name}
                            onChangeText={handleChange('company_name')}
                            placeholder='Enter Company Name'
                            label="Company Name"
                            errorMessage={errors.company_name}
                        />
                        <Input
                            value={values.company_website}
                            onChangeText={handleChange('company_website')}
                            placeholder='Enter Company Website'
                            label="Company Website"
                            errorMessage={errors.company_website}
                        />

                        <Button color={'success'} onPress={() => {
                            handleSubmit();
                        }}>Submit</Button>
                    </View>)
                }
            </Formik>

        </View>
    )
}

export default AddCompany

const styles = StyleSheet.create({})