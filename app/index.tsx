


import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const StartPage = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>StartPage</Text>

            <ActivityIndicator size={'large'} />
        </View>
    )
}

export default StartPage

const styles = StyleSheet.create({})