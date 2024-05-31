import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ChangePassScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    // Add change password logic
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.background1}></View>
      <View style={styles.background2}></View>
      <View style={styles.settingContainer}>
        <View style={styles.borderBottom}>
        <Text style={styles.header}>Password Setting</Text>
        </View>
        <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Current Password"
            value={currentPassword}
            onChangeText={setCurrentPassword}
        />
        <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
        />
        <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                    <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 20,
        marginBottom: 16,
    },
    background1: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 600,
    backgroundColor: '#f4f3ff',
    zIndex: -1,
    borderRadius: 30,
    marginHorizontal: 20,
    },
    background2: {
        position: 'absolute',
        top: -1,
        left: 0,
        right: 0,
        height: 211,
        backgroundColor: '#7a5af8',
        zIndex: -2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    settingContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'flex-end',
        marginBottom: 238,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#9794aa',
        marginBottom: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#9794aa',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 8,
    },
    button: {
        backgroundColor: '#7a5af8',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default ChangePassScreen;
