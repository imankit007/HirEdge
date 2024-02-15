import { Button, Input } from "@rneui/themed";
import { Formik } from "formik";
import { KeyboardAvoidingView, ToastAndroid, View } from "react-native";
import useAxiosPrivate from "../../../../utils/axiosPrivate";


const EditNameForm = ({ value, setEditOverlayVisible }: { value: Array<string>; setEditOverlayVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const api = useAxiosPrivate();

    return (
        <>
            <Formik initialValues={{
                first_name: value[0],
                middle_name: value[1],
                last_name: value[2]
            }}
                onSubmit={(values) => {
                    api.put('/student/profile', values).then(res => {
                        if (res.status == 200) {
                            setEditOverlayVisible(false);
                        }
                    }).catch(err => {
                        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
                    })
                }}>
                {
                    ({ values, handleChange, handleSubmit, errors }) => (<>
                        <KeyboardAvoidingView enabled>
                            <Input
                                value={values.first_name}
                                label="First Name"
                                onChangeText={handleChange('first_name')}
                                errorMessage={errors.first_name}
                            />

                            <Input
                                value={values.middle_name}
                                label="Middle Name"
                                onChangeText={handleChange('middle_name')}
                                errorMessage={errors.middle_name}
                            />

                            <Input
                                value={values.last_name}
                                label="Last Name"
                                onChangeText={handleChange('last_name')}
                                errorMessage={errors.last_name}
                            />
                            <View

                                style={{
                                    flex: 1,
                                    flexDirection: 'row-reverse',
                                }}
                            >
                                <Button onPress={() => { handleSubmit() }}
                                    type="clear"
                                >
                                    Save
                                </Button>
                                <Button
                                    type="clear"
                                    onPress={() => { setEditOverlayVisible(false) }}>
                                    Cancel
                                </Button>
                            </View>
                        </KeyboardAvoidingView>
                    </>)
                }
            </Formik>
        </>
    )
}

export default EditNameForm;