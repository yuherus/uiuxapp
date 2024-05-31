import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationsScreen = () => {
  const notifications = [
    { id: '1', priority:'Critical', title: 'Hi! It\'KPlecturer', description: 'You\'re running late. Finish your task before it\'s too late!' },
    { id: '2', priority:'High', title: 'Hi! It\'KPlecturer', description: 'You just have 1 hour to make this before you\'re left behind!' },
    { id: '3', priority:'Low', title: 'Hi! It\'KPlecturer', description: 'Time\'s up! Complete your task now!' },
    // Add more notifications here
  ];

  const renderIcon = (priority) => {
    if (priority === 'Critical') {
      return <Ionicons name="alert-circle" size={24} color="#FF0000" />;
    } else if (priority === 'High') {
      return <Ionicons name="alert-circle" size={24} color="#FFA500" />;
    } else {
      return <Ionicons name="alert-circle" size={24} color="#008000" />;
    }
  }

  const renderItem = ({ item }) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {renderIcon(item.priority)}
        <View style={styles.notification}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  notification: {
    padding: 15,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888888',
  },
});

export default NotificationsScreen;
