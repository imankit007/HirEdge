import { Button, Input, Overlay } from "@rneui/themed";
import { ToastAndroid, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { StudentProfileDataType } from "../../../../utils/Query/types";
import useAxiosPrivate from "../../../../utils/axiosPrivate";
import { useEffect } from "react";



type EditOverlayType = {
    field: string;
    values: Partial<StudentProfileDataType>;
    isVisible: boolean;
    setEditOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditOverlay = ({ field, values, isVisible, setEditOverlay }: EditOverlayType) => {

    const api = useAxiosPrivate();

    const { control, handleSubmit } = useForm<StudentProfileDataType>({
        defaultValues: values
    })



    const onSubmit = (data: StudentProfileDataType) => {
        setEditOverlay(false);
        console.log(data);
        api.put('/student/profile', data).then((res) => {
            if (res.status == 200) {
                ToastAndroid.show("Profile updated successfully", ToastAndroid.SHORT);
            }
        })
    }

    useEffect(() => {
        console.log(values)
    })

    return (
        <Overlay
            key={field}
            isVisible={isVisible} fullScreen={false} overlayStyle={{
                position: 'absolute',
                bottom: 0,
                display: 'flex',
                height: field === 'name' ? '40%' : "30%",
                width: "100%",
            }} onBackdropPress={() => { setEditOverlay(false) }}>
            {
                field === 'name' ? (
                    <View>
                        <Controller
                            name="first_name"
                            control={control}
                            render={({ fieldState: { }, field: { value, onChange }, }) => (
                                <Input
                                    label="First Name"
                                    value={value}
                                    onChangeText={onChange}
                                />)
                            }
                        />
                        <Controller
                            name="middle_name"
                            control={control}
                            render={({ fieldState: { }, field: { value, onChange }, }) => (
                                <Input
                                    label="Middle Name"
                                    value={value}
                                    onChangeText={onChange}
                                />)
                            }
                        />
                        <Controller
                            name="last_name"
                            control={control}
                            render={({ fieldState: { }, field: { value, onChange }, }) => (
                                <Input
                                    label="Last Name"
                                    value={value}
                                    onChangeText={onChange}
                                />)
                            }
                        />
                    </View>
                ) : field === 'email' ? (<View>
                    <Controller
                        name="email"
                        control={control}
                        render={({ fieldState: { }, field: { value, onChange }, }) => (
                            <Input
                                label="Email"
                                value={value}
                                onChangeText={onChange}
                            />)
                        }
                    />
                </View>) : field === 'mobile' ? (<View>
                    <Controller
                        name="mobile"
                        control={control}
                        render={({ fieldState: { }, field: { value, onChange }, }) => (
                            <Input
                                label="Mobile"
                                value={value}
                                onChangeText={onChange}
                            />)
                        }
                    />
                </View>) : field === 'ug_cgpa' ? (<View>
                    <Controller
                        name="ug_cgpa"
                        control={control}
                        render={({ fieldState: { }, field: { value, onChange }, }) => (
                            <Input
                                label="UG CGPA"
                                value={value.toString()}
                                onChangeText={onChange}
                            />)
                        }
                    />
                </View>) : null
            }

            <Button onPress={handleSubmit(onSubmit)}>Save</Button>
        </Overlay>
    )
}

export default EditOverlay;