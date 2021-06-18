import React from 'react';
import { Provider as PaperProvider,} from 'react-native-paper';
import { theme } from './App.style';

import { LoginScreen } from './src/screens/login/login.screen';
import { RegisterScreen } from './src/screens/register/register.screen';
import { HomeScreen } from './src/screens/home/home.screen';
import { AddressScreen } from './src/screens/address/address.screen';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AddressScreen />
    </PaperProvider>
  );
}

