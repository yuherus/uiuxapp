// MenuBar.js
import React from 'react';
import 'react-native-gesture-handler';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuBar = ({ navigation }) => {
  return (
    <View style={styles.menuBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Ionicons name="search-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBar: {
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
});

export default MenuBar;
