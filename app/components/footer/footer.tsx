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
    width: '100%',
    backgroundColor: '#eee',
    height: 40,
    justifyContent: 'center',
    position: 'relative',
    bottom: 0
  },
  text: {
    textAlign: 'center',
    color: '#555',
  }
});

export default Footer;