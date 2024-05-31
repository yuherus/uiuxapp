import React from 'react';
import { View, Text, Switch, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={'Setting'} navigation={navigation}/>
      <View style={styles.background1}></View>
      <View style={styles.background2}></View>
      <View style={styles.settingContainer}>
        <View style={styles.borderBottom}>
           <Text style={styles.header}>Account Settings</Text>
        </View>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('NotificationSettingScreen')}>
                <Text style={styles.menuText}>Notifications Setting</Text>
                <Ionicons name="chevron-forward" size={24} color="#49475A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ChangePassScreen')}>
                <Text style={styles.menuText}>Change Password</Text>
                <Ionicons name="chevron-forward" size={24} color="#49475A" />
        </TouchableOpacity>
        <View style={styles.switchContainer}>
            <Text style={styles.menuText}>Dark Mode</Text>
            <Switch />
        </View>
        <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        top: 0,
        left: 0,
        right: 0,
        height: 300,
        backgroundColor: '#7a5af8',
        zIndex: -2,
        borderRadius: 20,
    },
    settingContainer: {
        flex: 1,
        padding: 48,
        justifyContent: 'flex-end',
        marginBottom: 240,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#9794aa',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#9794aa',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 16,
        marginVertical: 16,
    },
    button: {
        backgroundColor: '#5D5FEF',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default SettingsScreen;
