import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton, ErrorMessage } from '../components/form';
import colors from '../config/colors';
import routes from '../navigation/routes';

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  color: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen({ navigation }: any) {
  const [error, setError] = React.useState<string>('');

  const handleSubmit = async (data: RegisterFormData) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/new.jpg')} />
      <Form
        InitialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          width="100%"
          placeholder="Name"
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
        <SubmitButton title="Register" />
      </Form>
      <TouchableOpacity>
        <Text style={styles.login} onPress={() => navigation.navigate(routes.LOGIN)}>
          Login
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
  login: {
    height: 30,
    color: colors['primary'],
    textAlign: 'center',
  },
});

export default RegisterScreen;
