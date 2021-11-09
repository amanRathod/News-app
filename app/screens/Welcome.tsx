import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

export interface WelcomeProps {
  navigation: any;
}

function WelcomeScreen({ navigation }: WelcomeProps) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require('../assets/images/new-3.jpeg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/images/new.jpg')} />
        <Text style={styles.text}>Welcome to the News app!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
          color="primary"
        />
        <AppButton
          title="Register"
          color="danger"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    alignItems: 'center',
    top: 70,
  },
  text: {
    flex: 1,
    color: colors['primary'],
    fontSize: 20,
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textShadowRadius: 10,
  },
});

export default WelcomeScreen;
