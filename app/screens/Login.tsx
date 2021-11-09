import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as Yup from "yup";
// import { Login } from "../api/auth";

import Screen from "../components/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/form";

export interface LoginFormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  // const { logIn } = useAuth();

  const handleSubmit = async (data: LoginFormData) => {
    try {
    
    } catch (err) {
      console.log(err);
    }
  }

  
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/images/new.jpg")} />
   
      <Form
        InitialValues={{ email: "", password: "" }}
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
        />
        <SubmitButton title="Login" />
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

export default LoginScreen;
