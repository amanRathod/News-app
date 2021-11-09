import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/form/index';

export interface ForgotPasswordProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

const ForgotPassword = () => {
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
});

export default ForgotPassword;
