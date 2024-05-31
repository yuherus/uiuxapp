import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';


const KPIDetailScreen = ({navigation}) => {
  const [progress, setProgress] = useState(80);
  const [status, setStatus] = useState('In Progress');
  const [hoursCompleted, setHoursCompleted] = useState(80);
  const [totalHours, setTotalHours] = useState(100);
  const [kpiName, setKpiName] = useState('Improve Project Completion Time');
  const [field, setField] = useState('Work');
  const [startDate, setStartDate] = useState('04/01/2024');
  const [endDate, setEndDate] = useState('06/30/2024');
  const [description, setDescription] = useState('Reducing the time taken to complete projects.');
  const [goal, setGoal] = useState('Reduce project completion time by 20%');
  const [unit, setUnit] = useState('Actual Time vs. Set Time');
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

  const handleConfirm = (date) => {
    hideDatePicker();
  };

  const handleConfirmStartTime = (date) => {
    hideStartTimePicker();
  };

  const handleConfirmEndTime = (date) => {
    hideEndTimePicker();
  };

  // State for plans
  const [plans, setPlans] = useState([
    { name: 'Plan 1', importance: 30, selected: true},
    { name: 'Plan 2', importance: 50, selected: true},
    { name: 'Plan 3', importance: 20, selected: true},
  ]);  
  const [selectedPlans, setSelectedPlans] = useState({});
  const [checked, setChecked] = useState(false);
  const [newPlanName, setNewPlanName] = useState('');
  const handleAddPlan = () => {
    if (newPlanName) {
      setPlans((prev) => [...prev, { name: newPlanName, importance: 0, selected: true}]);
      setNewPlanName('');
    }
  };
  const handleSelectPlan = (plan) => {
    setPlans((prev) =>
      prev.map((p) => {
        if (p.name === plan.name) {
          return { ...p, selected: !p.selected };
        }
        return p;
      })
    );
  };

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{kpiName}</Text>
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress/100} color={'#9c3ce7'} style={styles.progressBar}/>
        <View style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10,}}>
          <Text style={styles.hoursCompleted}>Hour completed {hoursCompleted}/{totalHours}</Text>
          <Text style={styles.status}>Status: {status}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Basic Information</Text>
        <Text style={styles.label}> KPI Name: </Text>
        <TextInput style={styles.input} value={kpiName} onChange={(e) => setKpiName(e.target.value)}/>
        <Text style={styles.label}> Field: </Text>
        <TextInput style={styles.input} value={field} onChange={(e) => setField(e.target.value)}/>
        <View style={styles.dateContainer}>
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
        <Text style={styles.label}> Description: </Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={description}
          multiline={true}
          editable={true}
          onChange={(e) => setDescription(e.target.value)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>KPI Goals</Text>
        <Text style={styles.label}>Specific Goal: </Text>
        <TextInput style={styles.input} value={goal} editable={true} onChange={(e) => setGoal(e.target.value)}/>
        <Text style={styles.label}>Measurement Unit: </Text>
        <Picker
          ref={pickerRef}
          mode='dialog'
          selectedValue={unit}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setUnit(itemValue)}
        >
          <Picker.Item label="Actual Time vs. Set Time" value="Actual Time vs. Set Time" />
          <Picker.Item label="Completion Level" value="Completion Level" />
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Linked Plans</Text>
          {plans.map((plan) => (
            <View key={plan} style={styles.planItem}>
              <TouchableOpacity>
                <Text>{plan.name}</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.importanceInput}
                value={plan.importance + '%'}
                editable={true}
                collapsable={true}
              />
              <View style={styles.checkbox}>
                <Checkbox
                    status={plan.selected ? 'checked' : 'unchecked'}
                    onPress={() => handleSelectPlan(plan)}
                    color='#6200ee'
                />
              </View>
            </View>
          ))}
          <View style={styles.addPlanContainer}>
            <TextInput
              style={styles.newPlanInput}
              value={newPlanName}
              onChangeText={setNewPlanName}
              placeholder="New Plan Name"
            />
            <Button title="Add new" onPress={handleAddPlan} />
          </View>
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
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200EE',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#6200EE',
  },
  hoursCompleted: {
    fontSize: 14,
    color: '#000000',
  },
  status: {
    fontSize: 14,
    color: '#000000',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200EE',
  },
  input: {
    height: 40,
    color: '#9794aa',
    borderColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  planName: {
    fontSize: 16,
    color: '#000000',
  },
  planImportance: {
    fontSize: 16,
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 70,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 5,
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
  pickerContainer: {
    borderColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    top: -30,
    width: '100%',
    height: 140,
  },
  planItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 12,
  },
  addPlanContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  newPlanInput: {
    width: '70%',
    padding: 12,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  checkbox:{
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: '50%',
  },
  importanceInput: {
    position: 'absolute',
    right: '20%',
    width: '20%',
    padding: 12,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
});

export default KPIDetailScreen;
