// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {
  const isMainScreen = () => {
      return title === 'Home' || title === 'KPI' || title === 'Plan List' || title === 'Activity';
  }

  return (
    <View style={styles.header}>
      {
        ( !isMainScreen()) ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        )
      }
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Notification") }>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 91,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
