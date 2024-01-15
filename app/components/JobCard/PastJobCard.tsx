import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PastJobCard = ({ name, img, offers}: {name:string , img:string, offers:string}) => {
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
            <Text 
                style={{ 
                    textAlign: 'center',
                    color:'red', 
                    fontWeight:'bold', 
                    marginTop:10,
                    fontSize: 14,
                    marginBottom: 10
                }}
            >
                Offers: {offers}
            </Text>
        </View>
    )
}

export default PastJobCard;