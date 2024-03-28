import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';



const Footer = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={[styles.footer, {
      marginTop: 140,
    }]}>
      <Text style={styles.text}>Copyright @SDMCET</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#eee',
    height: 40,
    justifyContent: 'center',

    position: 'relative',
  },
  text: {
    textAlign: 'center',
    color: '#555',
  }
});

export default Footer;