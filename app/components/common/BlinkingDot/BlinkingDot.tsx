import { View, Text } from 'react-native'
import React from 'react'
import BlinkView from 'react-native-smooth-blink-view';

const BlinkingDot = () => {

    return (
        <BlinkView
            delayVisible={300}
            delayInvisible={0}
            duration={400}
            blinking>
            <View style={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: 'red',
                marginRight:6
            }}></View>
        </BlinkView>
    )
}

export default BlinkingDot