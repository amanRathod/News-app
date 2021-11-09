import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Welcome from '../screens/Welcome';
import colors from '../config/colors';

const Stack = createStackNavigator();


const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: colors.primary,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} 
      options={{ title: ''}}
      
      />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '' }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: '' }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: '' }} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
