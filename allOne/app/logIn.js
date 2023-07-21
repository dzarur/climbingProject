import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.root}>
      <LogInToAsend/>
    </View>
  );
};

export function LogInToAsend() {
  return (
    <View style={styles.title}>
      <Text style={styles.title}>
        Log in to Asend
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#110E0E',
    width: 209,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#F6F6F6',
    fontFamily: 'Fira Sans',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',
  },

});

export default LoginScreen;
