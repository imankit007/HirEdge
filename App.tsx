import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/screens/RootLayout';
import AuthProvider from './app/utils/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

const queryClient = new QueryClient();

export default function App() {

  return (

    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AutocompleteDropdownContextProvider>
          <Layout />
          </AutocompleteDropdownContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}


