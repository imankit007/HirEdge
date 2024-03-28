import * as React from 'react';
import {
    View,

    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
} from 'react-native';
import { FieldError } from 'react-hook-form';
import { Input as TextInput } from '@rneui/themed';
interface Props extends TextInputProps {
    name: string;
    label?: string;
    labelStyle?: TextStyle;
    error?: FieldError | undefined;
}

export default React.forwardRef<any, Props>(
    (props, ref): React.ReactElement => {
        const { label, labelStyle, error, ...inputProps } = props;

        return (
            <View style={styles.container}>
                <TextInput
                    label={label}
                    placeholder={'Enter User ID'}
                    autoCapitalize="none"
                    ref={ref}
                    style={[styles.input, { borderColor: error ? '#fc6d47' : '#c0cbd3' }]}
                    errorMessage={
                        error?.type === 'minLength' ? "Min Length" : ""
                    }
                    {...inputProps}
                />
            </View>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingLeft: 5,
        fontSize: 16,
        height: 40,
        color: '#c0cbd3',
    },
    label: {
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c0cbd3',
    },
    textError: {
        color: '#fc6d47',
        fontSize: 14,
    },
});
