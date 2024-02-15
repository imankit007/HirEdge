
import { Button, Input } from "@rneui/themed";
import { Formik } from "formik";
import { KeyboardAvoidingView, ToastAndroid, View } from "react-native";
import useAxiosPrivate from "../../../../utils/axiosPrivate";

const EditEmailForm = ({ value, setEditOverlayVisible }: { value: Array<string>; setEditOverlayVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const api = useAxiosPrivate();

    return (
        <>
            <Formik initialValues={{
                email: value[0]
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
                                value={values.email}
                                label="Email"
                                onChangeText={handleChange('email')}
                                textContentType="emailAddress"
                                errorMessage={errors.email}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row-reverse',
                                }}
                            ><Button onPress={() => { handleSubmit() }}
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

export default EditEmailForm;