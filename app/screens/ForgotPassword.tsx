import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/form';
import colors from '../config/colors';
import routes from '../navigation/routes';

export interface ForgotPasswordProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

const ForgotPassword = ({ navigation }: any) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/new.jpg')} />
      <Form
        InitialValues={{ email: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title="Send" />
      </Form>
      <TouchableOpacity>
        <Text style={styles.login} onPress={() => navigation.navigate(routes.LOGIN)}>
          back to Login
        </Text>
      </TouchableOpacity>
    </Screen>
  );
};

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
  login: {
    height: 30,
    color: colors['primary'],
    textAlign: 'center',
  },
});

export default ForgotPassword;
