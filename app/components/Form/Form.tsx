import React from "react";
import { TextInput } from "react-native";
import { FieldError, InputValidationRules, UseFormRegister, UseFormSetValue, FieldErrors, RegisterOptions } from 'react-hook-form';




interface Props {
    children: JSX.Element | JSX.Element[];
    register: UseFormRegister<any>
    errors: FieldErrors<any>;
    validation: any;
    setValue: UseFormSetValue<any>
}

export default ({ register, errors, setValue, validation, children }: Props) => {
    const Inputs = React.useRef<Array<TextInput>>([]);

    React.useEffect(() => {
        (Array.isArray(children) ? [...children] : [children]).forEach((child) => {
            if (child.props.name)
                register(child.props.name, validation[child.props.name]);
        });
    }, [register]);

    return (
        <>
            {
                (Array.isArray(children) ? [...children] : [children]).map((child, i) => {
                    return child.props.name ?
                        React.createElement(child.type, {
                            ...{
                                ...child.props,
                                ref: (e: TextInput) => {
                                    Inputs.current[i] = e;
                                },
                                onChangeText: (v: string) => {
                                    setValue(child.props.name, v)
                                },
                                onSubmitEditing: () => {
                                    Inputs.current[i + 1] ? Inputs.current[i + 1].focus() : Inputs.current[i].blur()
                                },
                                blurOnSubmit: false,

                                error: errors[child.props.name]
                            }
                        }) : child
                })
            }
        </>
    )
}