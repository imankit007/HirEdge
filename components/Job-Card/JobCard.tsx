import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { red50 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const JobCard = ({ name}: any) => {
    return (
        <TouchableOpacity style={{
            height: 250,
            width: 200,
            borderRadius: 15,
            backgroundColor:'#808080',

        }}>
            <Image
                source={require("../../assets/images/job-logos/extreme.png")}
                style={{
                    height:120,
                    alignSelf: 'center',
                    marginTop: 40
                }}
            />
            <Text 
                style={{ 
                    textAlign: 'center',
                    color:'#fff', 
                    fontWeight:'bold', 
                    marginTop:30,
                    fontSize: 18
                }}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default JobCard