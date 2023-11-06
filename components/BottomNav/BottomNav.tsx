import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomNav = () => {
    return (
        <View
            style={{
                backgroundColor: "#A2D3C2",
                height: 80,
                padding: 8,
                paddingTop:14,
                width: "90%",
                alignSelf: 'center',
                borderRadius: 15,
                position: 'absolute',
                top: 680
            }}
        >
            <View style={{ display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/icons/jobs-icon.png')}
                        style={{
                            height: 50,
                            width: 50,
                            marginLeft:10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/icons/home-icon.png')}
                        style={{
                            height: 50,
                            width: 50,
                            marginLeft:10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/icons/profile-icon.png')}
                        style={{
                            height: 50,
                            width: 50,
                            marginLeft:10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/icons/message-icon.png')}
                        style={{
                            height: 50,
                            width: 50,
                            marginLeft:10
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomNav