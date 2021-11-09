import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/form';

export interface ResetPasswordProps {
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(4).label("Password"),
  confirmPassword: Yup.string().required().min(4).label("Confirm Password").oneOf([Yup.ref('password'), null], "Passwords must match"),
});

const ResetPassword = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/images/new.jpg")} />
    <Form 
    InitialValues={{ password: "", confirmPassword: "" }}
    onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
    >
     <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          width="100%"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="confirmPassword"
          width="100%"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />
      <SubmitButton title="Submit" />
    </Form>
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
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ResetPassword;