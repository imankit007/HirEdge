

import { View, Text, Button } from 'react-native'
import React from 'react'
import ImageCarousel from '../../components/ImageCarousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'

const data: ImageCarouselItem[] = [
    {
        id: 0,
        uri: require('../../assets/rectangle-2.png'),
        title: 'Register & Track Placement Activities',
    }, {
        id: 1,
        uri: require('../../assets/rectangle-21.png'),
        title: "Get Timely Notifications about Upcoming Placements"
    }

];


const Welcome = () => {


    const handleClick = () => {

        router.push('/login')
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <ImageCarousel data={data} />
            <Button
                title='Login'
                onPress={handleClick} />
        </SafeAreaView>
    )
}

export default Welcome;