import React from 'react';
import { Image, View } from 'react-native';

const SdmcetImage = () => {
  return (
    <View style={{
        width: '100%',
      padding: 5,
      backgroundColor: '#fff',
      alignSelf: 'flex-start',
        }}>
      <Image 
        source={require('../../../assets/images/sdmcet_logo.png')}
        style={{
            paddingTop:10,
            paddingBottom:10,   
          width: 164,
          height: 200,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

export default SdmcetImage;