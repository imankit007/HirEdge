import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const JobCard = ({ name, img}: {name:string , img:string}) => {
    return (
        <View style={{
            height: 160,
            width: 160,
            borderRadius: 15,
            backgroundColor:'#fff',
        }}>
            <Image
                source={{uri: img}}
                style={{
                    height:50,
                    width: 50,
                    alignSelf: 'center',
                    marginTop: 15
                }}
            />
            <Text 
                style={{ 
                    textAlign: 'center',
                    color:'black', 
                    fontWeight:'bold', 
                    marginTop:10,
                    fontSize: 14,
                    marginBottom: 10
                }}
            >
                {name}
            </Text>
            <TouchableOpacity style={{
                backgroundColor:'#A2D3C2',
                width:100,
                alignSelf:'center',
                marginTop:0,
                padding:6,
                borderRadius:10

            }}>
                <Text style={{textAlign:'center', color:'black', fontWeight:'bold'}}>See Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JobCard