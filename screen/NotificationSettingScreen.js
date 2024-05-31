import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background1}></View>
      <View style={styles.background2}></View>
      <View style={styles.settingContainer}>
        <View style={styles.borderBottom}>
           <Text style={styles.header}>Notifications Settings</Text>
        </View>
        {['General Notification', 'Sound', 'Past Due', 'Vibrate', 'Upcoming Activity', 'Deadline Reminder'].map((setting) => (
        <View style={styles.switchContainer} key={setting}>
          <Text style={styles.switchText}>{setting}</Text>
          <Switch />
        </View>
      ))}
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
        padding: 48,
        justifyContent: 'flex-end',
        marginBottom: 180,
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
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    switchText: {
        fontSize: 16,
    },
});

export default NotificationSettingsScreen;
