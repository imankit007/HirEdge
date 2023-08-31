import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const InfoPage1 = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 40,
      backgroundColor: "#F8DE22"
    }}>

      <Text
        style={{
          color: Color.black,
          fontSize: 20
          , textAlign: 'center'
        }}
      >{`HirEdge For Graduating Students 
of SDMCET`}</Text>
      <Image
        style={{

        }}
        resizeMode="cover"
        source={require("../../../assets/rectangle-11.png")}
      />
      <Text
        style={{
          color: Color.black,
          fontSize: 20,
          textAlign: 'center'
        }}
      >{`Register & Keep Track of 
On-Campus Placement Activities`}</Text>
    </View>
  );
};



export default InfoPage1;
