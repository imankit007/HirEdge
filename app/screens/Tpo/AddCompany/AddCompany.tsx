import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { Button, Input } from '@rneui/themed'

const AddCompany = () => {
    return (
        <View>

            <Formik
                initialValues={{
                    company_name: '',
                    company_website: '',
                }}
                onSubmit={(values, helpers) => {
                    ToastAndroid.show(JSON.stringify(values), ToastAndroid.SHORT);
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