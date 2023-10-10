import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Copyright @SDMCET</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#eee',
    padding: 10,
    alignSelf: 'flex-end',
    height: 40,
  },
  text: {
    textAlign: 'center',
    color: '#555' 
  }
});

export default Footer;