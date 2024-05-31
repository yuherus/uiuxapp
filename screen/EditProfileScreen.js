import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const EditProfileScreen = ({ navigation, route }) => {
  const { username, phone, email } = route.params;

  const [newUsername, setNewUsername] = useState(username);
  const [newPhone, setNewPhone] = useState(phone);
  const [newEmail, setNewEmail] = useState(email);

  const handleUpdateProfile = () => {
    // Handle profile update logic here
    console.log("Profile updated:", newUsername, newPhone, newEmail);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.profileContainer}>
            <View style={styles.profileUserContainer}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Osb6fxNkA7rP0u2dzdniNOHxAeqTMoEE-c60bQcHpw&s' }} style={styles.profileImage} />
                <Text style={styles.profileName}>{username}</Text>
                <Text style={styles.profileId}>ID: 26102003</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>User Profile</Text>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={newUsername}
                    onChangeText={setNewUsername}
                />

                <Text style={styles.label}>Phone</Text>
                <TextInput
                    style={styles.input}
                    value={newPhone}
                    onChangeText={setNewPhone}
                />

                <Text style={styles.label}>Email address</Text>
                <TextInput
                    style={styles.input}
                    value={newEmail}
                    onChangeText={setNewEmail}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
                <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '100%',
  },
  background: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 556,
      backgroundColor: '#f4f3ff',
      zIndex: -1,
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
  },
  profileContainer: {
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
    profileUserContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#5D5FEF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default EditProfileScreen;
