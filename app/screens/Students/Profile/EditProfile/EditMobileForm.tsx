import { Button, Input } from "@rneui/themed";
import { Formik } from "formik";
import { KeyboardAvoidingView, ToastAndroid, View } from "react-native";
import useAxiosPrivate from "../../../../utils/axiosPrivate";

const MobileEditForm = ({ value, setEditOverlayVisible }: { value: Array<string>; setEditOverlayVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const api = useAxiosPrivate();

    return (
        <>
            <Formik initialValues={{
                mobile: value[0]
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
                                value={values.mobile}
                                label="Mobile"
                                onChangeText={handleChange('mobile')}
                                textContentType="telephoneNumber"
                                errorMessage={errors.mobile}
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

export default MobileEditForm;