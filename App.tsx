import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import Register from './app/screens/Register';
import LoginScreen from './app/screens/Login';
// import ForgotPassword from './app/screens/ForgotPassword';
// import ResetPassword from './app/screens/ResetPassword';

export default function App() {
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  // if (!isLoadingComplete) {
  //   return null;
  // }
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}
