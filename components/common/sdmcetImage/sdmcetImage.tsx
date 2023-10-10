import React from 'react';
import { Image, View } from 'react-native';

const SdmcetImage = () => {
  return (
    <View style={{
        width: '100%',
        }}>
      <Image 
        source={require('../../../assets/images/sdmcet.png')}
        style={{
         marginTop:0,   
         width:"100%",
         height: 100,
         borderColor:'black',
         borderWidth:1

        }}
      />
    </View>
  );
}

export default SdmcetImage;