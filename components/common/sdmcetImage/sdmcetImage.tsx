import React from 'react';
import { Image, View } from 'react-native';

const SdmcetImage = () => {
  return (
    <View style={{
        width: '100%',
        // marginTop:10,
        // marginBottom:10,
        padding:20,
        backgroundColor:'#fff'
        }}>
      <Image 
        source={require('../../../assets/images/sdmcet_logo.png')}
        style={{
            paddingTop:10,
            paddingBottom:10,   
            width:150,
            height: 200,
            alignSelf:'center',
            borderColor:'black',
            borderWidth:1,
            borderRadius:10
            
    

        }}
      />
    </View>
  );
}

export default SdmcetImage;