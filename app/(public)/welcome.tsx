import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import {useNavigation} from '@react-navigation/native';  

const WelcomePage = ({ }) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Placement Management!</Text>
      {/* <Button 
        title="Login"
        onPress={() => navigation.navigate('StartPage')} 
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default WelcomePage;