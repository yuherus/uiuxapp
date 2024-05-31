import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

const plans = [
  { name: 'Online Course Completion', duration: '3 months', period: 'May - August' },
  { name: 'Language Learning', duration: '8 months', period: 'April - December' },
  { name: 'Literature Review', duration: '2 months', period: 'June - August' },
  { name: 'Experimental Research', duration: '6 months', period: 'June - December' },
  { name: 'Recipe Mastery', duration: '5 months', period: 'March - August' },
  { name: 'Culinary Techniques', duration: '4 months', period: 'May - December' },
  { name: ' Workout Routine', duration: '10 months', period: 'May - August' },
  { name: 'Healthy Eating', duration: '8 months', period: 'May - December' },
  { name: 'Daily Schedule Optimization', duration: '9 months', period: 'May - August' },
  { name: 'Productivity Techniques', duration: '6 months', period: 'May - December' },
];

const PlanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title='Plan List' navigation={navigation} />
      <ScrollView contentContainerStyle={styles.planList}>
        {plans.map((plan, index) => (
          <TouchableOpacity
            key={index}
            style={styles.planItem}
            onPress={() => navigation.navigate('PlanDetailScreen', { plan })}
          >
            <Text style={styles.planName}>{plan.name}</Text>
            <Text style={styles.planDuration}>{plan.duration}</Text>
            <Text style={styles.planPeriod}>{plan.period}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5D5FEF',
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  menuButton: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  planList: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  planItem: {
    width: '48%',
    height: 150,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'space-around'
  },

  planName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planDuration: {
    fontSize: 16,
    color: 'gray',
  },
  planPeriod: {
    fontSize: 14,
    color: 'gray',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    backgroundColor: '#5D5FEF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 36,
  },
});

export default PlanScreen;
