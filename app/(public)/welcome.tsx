

import { View, Text, Button, TouchableOpacity } from 'react-native'
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
            backgroundColor: '#EAD637'
        }}>
            <ImageCarousel data={data} />
            {/* <Button
                title='Login'
                onPress={handleClick} /> */}
            <TouchableOpacity
                style={{
                    backgroundColor: '#A2D3C2',
                    padding: 15,
                    borderRadius: 20,
                    width: 350,
                    alignSelf: 'center',
                    marginBottom: 80
                }}
                onPress={handleClick}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#000'
                    }}
                >
                    Login to SDMCET's Hiredge
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                style={{
                    backgroundColor: '#230C0F',
                    padding: 15,
                    borderRadius: 20,
                    width: 350,
                    alignSelf: 'center',
                    marginTop:20,
                    marginBottom: 70
                }}
                onPress={handleClick}
            >
                <Text 
                    style={{
                        textAlign:'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#fff',
                    }}
                >
                    Register to SDMCET's Hiredge
                </Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default Welcome;