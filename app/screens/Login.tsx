import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
// import { Login } from "../api/auth";

import Screen from '../components/Screen';
import { ErrorMessage, Form, FormField, SubmitButton } from '../components/form';
import colors from '../config/colors';
import routes from '../navigation/routes';

export interface LoginFormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen({ navigation }: any) {
  const [loginFailed, setLoginFailed] = useState(false);
  // const { logIn } = useAuth();

  const handleSubmit = async (data: LoginFormData) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/new.jpg')} />

      <Form
        InitialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email or password" visible={loginFailed} />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          width="100%"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          errors={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          values={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          width="100%"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          errors={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          values={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
        />
        <TouchableOpacity>
          <Text
            style={styles.forgot_button}
            onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <SubmitButton title="Login" color="primary" />
      </Form>
      <TouchableOpacity>
        <Text style={styles.signup} onPress={() => navigation.navigate(routes.REGISTER)}>
          SignUp
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: colors['primary'],
    flexDirection: 'row',
  },
  signup: {
    height: 30,
    color: colors['primary'],
    textAlign: 'center',
  },
});

export default LoginScreen;
