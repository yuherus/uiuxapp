import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

const ActivityScreen = ({ navigation }) => {
  const activities = [
    { id: 1, title: 'UI/UX', duration: '3 months', activity: 'Activity #1' },
    { id: 2, title: 'Technology behind the Blockchain', duration: '14:00-15:00 every Friday', activity: 'Activity #2' },
    { id: 3, title: 'Greatest way to a good Economy', duration: '3 months', activity: 'Activity #3' },
    { id: 4, title: 'Most essential tips for Burnout', duration: '3 months', activity: 'Activity #4' },
    { id: 5, title: 'IT Nihongo', duration: '3 months', activity: 'Activity #5' },
    { id: 6, title: 'Finance', duration: '3 months', activity: 'Activity #6' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ActivityDetailScreen')}>
      <Text style={styles.itemDate}>{item.duration}</Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemActivity}>{item.activity} • <Text style={styles.kpiDetails}>See Activity details</Text></Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Header title={'Activity'} navigation={navigation}/>
        <ScrollView>
        <FlatList
            data={activities}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  activityItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
  listContainer: {
    padding: 16,
  },
  activityDuration: {
    fontSize: 14,
    color: 'gray',
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6A4CFA',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: '#f4f3ff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  itemDate: {
    fontSize: 14,
    color: '#7f7f7f',
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemActivity: {
    fontSize: 14,
    color: '#7f7f7f',
  },
});

export default ActivityScreen;
