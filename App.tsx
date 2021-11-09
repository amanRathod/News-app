import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './app/screens/Login';
import ForgotPassword from './app/screens/ForgotPassword';
import ResetPassword from './app/screens/ResetPassword';
import NavigationTheme from './app/navigation/NavigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import Screen from './app/components/Screen';
import RegisterScreen from './app/screens/Register';
// import ResetPassword from './app/screens/ResetPassword';

export default function App() {
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
