import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      return alert('Please fill all the fields');
    }
    if ( email == "admin" && password == "admin") {
      navigation.navigate('Main');
    } else {
        return alert('Invalid email or password');
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/freepik-export-20240513161243k1kq 1.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome back <Text style={styles.wave}>👋</Text></Text>
      <Text style={styles.subtitle}>We are happy to have you back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don’t have an account? <Text style={styles.signupText}>Sign up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wave: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: '#888888',
  },
  signupText: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
