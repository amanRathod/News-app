import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Register from './app/screens/Register';
import Login from './app/screens/Login';
import ForgotPassword from './app/screens/ForgotPassword';
import ResetPassword from './app/screens/ResetPassword';
import useCachedResources from './app/hooks/useCachedResources';
import useColorScheme from './app/hooks/useColorScheme';
import Navigation from './app/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ResetPassword />
      </SafeAreaProvider>
    );
  }
}
