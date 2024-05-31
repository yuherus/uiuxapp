import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';

const completedData = [
  { id: '5', date: '5/32/2024', title: 'Time Management KPI', activity: 'Time' },
  { id: '1', date: '5/2/2024', title: ' Learning Progress KPI', activity: 'Education' },
  { id: '2', date: '5/16/2024', title: 'Research Milestone KPI', activity: 'IT' },
  { id: '3', date: '5/12/2024', title: 'Culinary Skills Improvement KPI', activity: 'Education' },
  { id: '4', date: '5/25/2024', title: 'Health & Fitness KPI', activity: 'Health' },
];

const undueData = [
  { id: '1', date: '5/2/2024', title: ' Learning Progress KPI', activity: 'Education' },
  { id: '5', date: '5/2/2024', title: 'Time Management KPI', activity: 'Time' },
  { id: '3', date: '5/2/2024', title: 'Culinary Skills Improvement KPI', activity: 'Education' },
  { id: '2', date: '5/2/2024', title: 'Research Milestone KPI', activity: 'IT' },
  { id: '4', date: '5/2/2024', title: 'Health & Fitness KPI', activity: 'Health' },
];

const lateData = [
  { id: '2', date: '5/2/2024', title: 'Research Milestone KPI', activity: 'IT' },
  { id: '1', date: '5/2/2024', title: ' Learning Progress KPI', activity: 'Education' },
  { id: '3', date: '5/2/2024', title: 'Culinary Skills Improvement KPI', activity: 'Education' },
  { id: '5', date: '5/2/2024', title: 'Time Management KPI', activity: 'Time' },
  { id: '4', date: '5/2/2024', title: 'Health & Fitness KPI', activity: 'Health' },
];

const KPIScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Completed');

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('KPIDetailScreen')}>
      <Text style={styles.itemDate}>{item.date}</Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemActivity}>{item.activity} • <Text style={styles.kpiDetails}>See KPI details</Text></Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Header title={'KPI'} navigation={navigation}/>
        <ScrollView>
        <View style={styles.kpiSummary}>
            <View style={styles.kpiItem}>
            <Text style={styles.kpiValue}>53%</Text>
            <Text style={styles.kpiLabel}>Completed</Text>
            </View>
            <View style={styles.kpiItem}>
            <Text style={styles.kpiValue}>24%</Text>
            <Text style={styles.kpiLabel}>Undue</Text>
            </View>
            <View style={styles.kpiItem}>
            <Text style={styles.kpiValue}>23%</Text>
            <Text style={styles.kpiLabel}>Late</Text>
            </View>
        </View>

        <View style={styles.tabContainer}>
            {['Completed', 'Undue', 'Late'].map((tab) => (
            <TouchableOpacity
                key={tab}
                style={[styles.tab, selectedTab === tab && styles.activeTab]}
                onPress={() => setSelectedTab(tab)}
            >
                <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
            ))}
        </View>
        
        <FlatList
            data={selectedTab === 'Completed' ? completedData : selectedTab === 'Undue' ? undueData : lateData}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6200ea',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 8,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  kpiSummary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 24,
    margin: 16,
    backgroundColor: '#f4f3ff',
    borderRadius: 16,
  },
  kpiItem: {
    alignItems: 'center',
  },
  kpiValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  kpiLabel: {
    fontSize: 16,
    color: '#7f7f7f',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 16,
    color: '#7f7f7f',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6200ea',
  },
  activeTabText: {
    color: '#6200ea',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
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
  kpiDetails: {
    color: '#6200ea',
  },
});

export default KPIScreen;
