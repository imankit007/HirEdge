import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/screens/RootLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './app/screens/Public/login';
import Welcome from './app/screens/Public/welcome'
import AuthProvider from './app/utils/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

export default function App() {

  return (

    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
