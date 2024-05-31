import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    const username = 'Cristiano Ronaldo';
    const phone = '0987654321';
    const email = 'abc@gmail.com';

    const handleLogout = () => {
        navigation.replace('Login');
    };
    return (
    <View style={styles.container}> 
      <Header title={'Profile'} navigation={navigation}/>
      <View style={styles.background}></View>
      <View style={styles.profileContainer}>
        <View style={styles.profileUserContainer}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Osb6fxNkA7rP0u2dzdniNOHxAeqTMoEE-c60bQcHpw&s' }} style={styles.profileImage} />
            <Text style={styles.profileName}>Cristiano Ronaldo</Text>
            <Text style={styles.profileId}>ID: 26102003</Text>
        </View>
        <TouchableOpacity style={styles.menuItem} 
            onPress={() => navigation.navigate('EditProfile', { username, phone, email })}
        >
            <Ionicons name="person-circle" size={32} color="#5D5FEF"  
            />
            <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Help')}>
            <Ionicons name="help-circle" size={32} color="#5D5FEF" />
            <Text style={styles.menuText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Ionicons name="log-out" size={32} color="#5D5FEF" />
            <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
    );};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    background: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 520,
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
        marginBottom: 150,
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
    profileId: {
      fontSize: 16,
      color: 'gray',
    },
    menuItem: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    menuText: {
      fontSize: 18,
      marginLeft: 20,
    },
});

export default ProfileScreen;