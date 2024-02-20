import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/screens/RootLayout';
import AuthProvider from './app/utils/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({

})

const queryClient = new QueryClient();

export default function App() {

  return (
    <SafeAreaView style={{
      flex: 1
    }}>

    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AutocompleteDropdownContextProvider>

          <Layout />
          </AutocompleteDropdownContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
    </SafeAreaView>
  );
}


