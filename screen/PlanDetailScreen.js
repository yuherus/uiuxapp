import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';

const PlanDetailScreen = ({ route, navigation }) => {
  const { plan } = route.params;
  const activities = [
    { id: 1, name: 'CSS for Designers', source: 'VSCode' },
    { id: 2, name: '3D Design Foundations', source: 'Figma' },
    { id: 3, name: 'HTML for Designers', source: 'VSCode' },
  ];

  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  }

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  }

  const handleConfirmStartTime = (date) => {
    hideStartTimePicker();
  };

  const handleConfirmEndTime = (date) => {
    hideEndTimePicker();
  };

  const renderAcivity = (activity) => (
    <View style={styles.activityItem}>
      <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.activityIcon} />
      <View>
        <Text style={styles.activityName}>{activity.name}</Text>
        <Text style={styles.activitySource}>{activity.source}</Text>
      </View>
    </View>
  );

  const handleAddActivity = () => {
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.planTitle}>{plan.name}</Text>
        <Text style={styles.sectionTitle}>Goals</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Team work, Figma, vv"
        />
        <Text style={styles.sectionTitle}>Time</Text>
        <View style={styles.timeContainer}>
        <TouchableOpacity onPress={showStartTimePicker} style={styles.timePicker} >   
          <Text style={{color: "#9794aa"}}>Start Time</Text>  
          <Ionicons name='time' size={24} color="#9794aa"></Ionicons>
        </TouchableOpacity>      
        <DateTimePickerModal
          isVisible={isStartTimePickerVisible}
          mode="date"
          onConfirm={handleConfirmStartTime}
          onCancel={hideStartTimePicker}
        />
        <TouchableOpacity onPress={showEndTimePicker} style={styles.timePicker} >   
        <Text style={{color: "#9794aa"}}>End Time</Text>  
        <Ionicons name='time' size={24} color="#9794aa"></Ionicons>
        </TouchableOpacity>      
        <DateTimePickerModal
          isVisible={isEndTimePickerVisible}
          mode="date"
          onConfirm={handleConfirmEndTime}
          onCancel={hideEndTimePicker}
        />
        </View>
        <Text style={styles.sectionTitle}>Activity List</Text>
        <View style={styles.activityList}>
          {activities.map((activity) => renderAcivity(activity))}
          <TouchableOpacity onPress={handleAddActivity}>
            <Text style={styles.addActivity}>+ Add new</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={{width: '40%', alignItems: 'center', backgroundColor: '#ddd', padding: 12, borderRadius: 8, }} >
            <Text style={{color: 'red', fontSize: 18, fontWeight: 500,}}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '40%', alignItems: 'center', backgroundColor: '#6200ee', padding: 12, borderRadius: 8, }}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 500,}}>Save</Text>
          </TouchableOpacity>
        </View>
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
  backButton: {
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
  contentContainer: {
    padding: 20,
  },
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeInput: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '48%',
  },
  activityList: {
    marginTop: 10,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  activityIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activitySource: {
    fontSize: 14,
    color: 'gray',
  },
  addActivity: {
    color: '#5D5FEF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 30,
  },
  deleteButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: '#5D5FEF',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timePicker: {
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default PlanDetailScreen;
