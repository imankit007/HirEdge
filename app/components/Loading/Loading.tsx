import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    size: number;
}


const Loading = ({ size }: Props) => {
    return (
        <ActivityIndicator
            size={size}
            color={'aqua'}
        />

    )
}

export default Loading

const styles = StyleSheet.create({})