import React, { useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Switch, TouchableOpacity, Button, TextInput } from 'react-native';
import { ProgressBar, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { BarChart } from 'react-native-chart-kit';

const ActivityDetailScreen = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: 'Soccer' },
    { id: 2, name: 'Learning' }
  ]);

  const [newActivity, setNewActivity] = useState('');

  const addActivity = () => {
    if (newActivity.trim()) {
      setActivities([...activities, { id: Date.now(), name: newActivity }]);
      setNewActivity('');
    }
  };

  const removeActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

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

  const data = {
    labels: ['0', '4', '8', '12', '16', '20'],
    datasets: [{
      data: [ 20, 45, 28, 30, 52, 18 ]
    }]
  }

  const graphStyle = {
    marginVertical: 8,
    borderRadius: 16,

  }

  const screenWidth = 350;
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  }

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>UI/UX Figma Lesson</Text>
      <Text style={styles.progressText}>80% Almost Done</Text>
      <ProgressBar progress={0.8} color="#6A4CFA" style={styles.progressBar} />

      <Text style={styles.description}>
        Get started in design by learning the basics. Learn everything from pixels.
      </Text>
      
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={showStartTimePicker} style={styles.timePicker} >   
          <Text style={{color: "#9794aa"}}>Start Time</Text>  
          <Ionicons name='time' size={24} color="#9794aa"></Ionicons>
        </TouchableOpacity>      
        <DateTimePickerModal
          isVisible={isStartTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmStartTime}
          onCancel={hideStartTimePicker}
        />
        <TouchableOpacity onPress={showEndTimePicker} style={styles.timePicker} >   
        <Text style={{color: "#9794aa"}}>End Time</Text>  
        <Ionicons name='time' size={24} color="#9794aa"></Ionicons>
        </TouchableOpacity>      
        <DateTimePickerModal
          isVisible={isEndTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmEndTime}
          onCancel={hideEndTimePicker}
        />
      </View>

      {/* <Text style={styles.changeText}>+2.45%</Text> */}

      {/* <View style={styles.timeContainer}>
        <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel={''}
          chartConfig={chartConfig}
        />
      </View> */}

      <View style={styles.remindContainer}>
        <Text style={styles.remindText}>Reminds me</Text>
        <Switch />
      </View>

      <Text style={styles.addActivityTitle}>Select your SKills</Text>
      <ScrollView horizontal style={{}}>
        <View style={styles.activitiesContainer}>
          {activities.map(activity => (
            <View key={activity.id} style={styles.activityChip}>
              <Text style={styles.activityText}>{activity.name}</Text>
              <TouchableOpacity onPress={() => removeActivity(activity.id)}>
                <Ionicons name="close" size={16} color="#6B38FB" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{top: -180,flexDirection: 'row', justifyContent: 'space-between',width: '100%', alignItems: 'center',}}>
        <TextInput
          style={styles.planAddActivityInput}
          placeholder="Enter new skills"
          value={newActivity}
          onChangeText={setNewActivity}
        />
        <TouchableOpacity onPress={addActivity} style={styles.addActivityButton}>
          <Text style={styles.addActivityText}>+ Add new</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: 'gray',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  changeText: {
    width: '100%',
    textAlign: 'right',
    fontSize: 14,
    color: 'green',
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeItem: {
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  timeBar: {
    height: 40,
    width: 10,
    borderRadius: 5,
  },
  remindContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  remindText: {
    fontSize: 14,
    color: 'gray',
  },
  skillsText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  skillBadge: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    fontSize: 14,
    color: 'gray',
  },
  addSkill: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
  addSkillText: {
    fontSize: 14,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: '#6A4CFA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
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
  },
  activitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activityChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4FB',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  activityText: {
    color: '#6B38FB',
    marginRight: 5,
  },
  addActivityButton: {
    marginTop: 10,
  },
  addActivityText: {
    color: '#6B38FB',
  },
  addActivityTitle: {
    width: '100%',
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 12,
  },
  planAddActivityInput: {
    width: '70%',
    borderWidth: 0.5,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
  },
  buttonContainer: {
    top: -150,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ActivityDetailScreen;
