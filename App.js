import 'react-native-gesture-handler';
import React, { useCallback, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Platform, TextInput, Switch } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Checkbox } from 'react-native-paper';
import { LogBox } from 'react-native';

import Header from './components/Header';
import ProfileNavigator from './screen/navigation/ProfileNavigator';
import SettingNavigator from './screen/navigation/SettingNavigator';
import StatisticsScreen from './screen/StatisticsScreen';
import KPINavigator from './screen/navigation/KPINavigator';
import ActivityNavigator from './screen/navigation/ActivityNavigator';
import PlanNavigator from './screen/navigation/PlanNavigator';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import HomeScreen from './screen/HomeScreen';
import NotificationsScreen from './screen/NotificationScreen';

LogBox.ignoreAllLogs(true);
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customButtonContainer}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

// const HomeScreen = ({ navigation }) => {
//   const renderEvent = (time, title, description) => (
//     <View style={styles.eventContainer} key={title}>
//       <Text style={styles.eventTime}>{time}</Text>
//       <View>
//         <Text style={styles.eventTitle}>{title}</Text>
//         <Text style={styles.eventDescription}>{description}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Header title={'Home'} navigation={navigation}/>
//       <Calendar
//         style={styles.calendar}
//         current={'2024-05-02'}
//         minDate={'2022-05-10'}
//         maxDate={'2024-05-30'}
//         monthFormat={'MMMM yyyy'}
//         hideArrows={false}
//         hideExtraDays={true}
//         disableMonthChange={true}
//         firstDay={1}
//         onDayPress={(day) => {
//           console.log('selected day', day);
//         }}
//         theme={{
//           backgroundColor: '#ffffff',
//           calendarBackground: '#ffffff',
//           textSectionTitleColor: '#b6c1cd',
//           selectedDayBackgroundColor: '#6200ee',
//           selectedDayTextColor: '#ffffff',
//           todayTextColor: '#6200ee',
//           dayTextColor: '#2d4150',
//           textDisabledColor: '#d9e1e8',
//           dotColor: '#00adf5',
//           selectedDotColor: '#ffffff',
//           arrowColor: 'orange',
//           disabledArrowColor: '#d9e1e8',
//           monthTextColor: 'black',
//           indicatorColor: 'blue',
//           textDayFontFamily: 'monospace',
//           textMonthFontFamily: 'monospace',
//           textDayHeaderFontFamily: 'monospace',
//           textDayFontWeight: '300',
//           textMonthFontWeight: 'bold',
//           textDayHeaderFontWeight: '300',
//           textDayFontSize: 16,
//           textMonthFontSize: 16,
//           textDayHeaderFontSize: 16,
//         }}
//         markedDates={{
//           '2024-05-02': { selected: true, marked: true, selectedColor: '#6200ee' },
//           '2024-05-03': { marked: true },
//           '2024-05-04': { marked: true, dotColor: '#50cebb' },
//           '2024-05-05': { marked: true, dotColor: '#50cebb' },
//         }}
//       />

//       <ScrollView style={styles.eventsContainer}>
//         {renderEvent('10:00-13:00', 'Học UIUX', 'Chương 1')}
//         {renderEvent('14:00-15:00', 'Học tiếng Nhật chuyên ngành', 'Nội dung trên là một nội dung rất dài kh...')}
//       </ScrollView>
//     </View>
//   );
// };

const HasNotiScreen = () => {
  return (
    <Stack.Navigator initialRouteName='DrawerScreen'  screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#6200ee' },
    }}>
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={NotificationsScreen} options={{headerBackTitle: 'Back'}}  />
    </Stack.Navigator>

  )
}

const DrawerScreen = () => {
  return (
    <Drawer.Navigator 
     initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
     <Drawer.Screen name="Home" component={HomeScreen} />
     <Drawer.Screen name="KPI" component={KPINavigator} />
     <Drawer.Screen name="Plan" component={PlanNavigator} />
     <Drawer.Screen name="Activity" component={ActivityNavigator} />
   </Drawer.Navigator>
  );
};

const Home = () => {
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
  const bottomSheetRef = useRef(null);
  const kpiSheetRef = useRef(null);
  const planSheetRef = useRef(null);
  const actSheetRef = useRef(null);
  const snapPoints = ['40%', '80%', '60%'];

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handleAddNewKPI = useCallback(() => {
    bottomSheetRef.current?.close();
    kpiSheetRef.current?.snapToIndex(1);
  }, []);

  const handleAddNewPlan = useCallback(() => {
    bottomSheetRef.current?.close();
    planSheetRef.current?.snapToIndex(1);
  }, []);

  const handleAddNewActivity = useCallback(() => {
    bottomSheetRef.current?.close();
    actSheetRef.current?.snapToIndex(2);
  }, []);

  const handleCreateActivity = useCallback(() => {
    actSheetRef.current?.close();
  })

  const handleCreatePlan = useCallback(() => {
    planSheetRef.current?.close();
  })

  const handleCreateNewKPI = useCallback(() => {
    kpiSheetRef.current?.close();
    setCurrentTab(0);
  })

  // const [popupVisible, setPopupVisible] = useState(true);
  // const showSuccessPopup = (() => {
  //   const handleHideDialog = () => {
  //     setPopupVisible(false);
  //    };
  //   return (
  //       <Portal>
  //           <Dialog visible={popupVisible} onDismiss={handleHideDialog}>
  //             <Dialog.Title>Success</Dialog.Title>
  //             <Dialog.Content>
  //               <Paragraph>Create KPI was successful.</Paragraph>
  //             </Dialog.Content>
  //             <Dialog.Actions>
  //               <Button onPress={handleHideDialog}>OK</Button>
  //             </Dialog.Actions>
  //           </Dialog>
  //       </Portal>
  //     )
  // })

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);
    const [kpiName, setKpiName] = useState('');
    const [field, setField] = useState('');
    const [description, setDescription] = useState('');
    const [specificGoal, setSpecificGoal] = useState('');
    const [measurementUnit, setMeasurementUnit] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
      // State for plans
    const [plans, setPlans] = useState(['Plan 1', 'Plan 2', 'Plan 3']);
    const [selectedPlans, setSelectedPlans] = useState({});
    const [checked, setChecked] = useState(false);
    const [newPlanName, setNewPlanName] = useState('');

    const handleAddPlan = () => {
      if (newPlanName.trim()) {
        setPlans([...plans, newPlanName.trim()]);
        setNewPlanName('');
      }
    };
  
    const handleSelectPlan = (plan) => {
      setSelectedPlans((prev) => ({
        ...prev,
        [plan]: !prev[plan],
      }));
    };

  
    const handleNext = () => {
      if (currentTab < 2) setCurrentTab(currentTab + 1);
    };
  
    const handleBack = () => {
      if (currentTab > 0) setCurrentTab(currentTab - 1);
    };
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

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

    const renderStepIndicator = () => (
      <View style={styles.stepIndicator}>
        <View style={[styles.step, currentTab == 0 && styles.activeStep]}>
          <Text style={[styles.stepText, currentTab == 0 && styles.activeStepText]}>1</Text>
          <Text style={[styles.stepLabel, currentTab == 0 && styles.activeStepLabel]}>Basic Info</Text>
        </View>
        <View style={[styles.step, currentTab == 1 && styles.activeStep]}>
          <Text style={[styles.stepText, currentTab == 1 && styles.activeStepText]}>2</Text>
          <Text style={[styles.stepLabel, currentTab == 1 && styles.activeStepLabel]}>Set Goals</Text>
        </View>
        <View style={[styles.step, currentTab == 2 && styles.activeStep]}>
          <Text style={[styles.stepText, currentTab == 2 && styles.activeStepText]}>3</Text>
          <Text style={[styles.stepLabel, currentTab == 2 && styles.activeStepLabel]}>Select Plans</Text>
        </View>
      </View>
    );
  
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Statistics') {
                iconName = 'bar-chart-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'Profile') {
                iconName = 'person-outline';
              }
              if (route.name === 'Add') {
                return <View style={{
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#6200ee",
                          height: Platform.OS === "ios" ? 70 : 60,
                          width: Platform.OS === "ios" ? 70 : 60,
                          top: Platform.OS === "ios" ? -20 : -30,
                          borderRadius: Platform.OS === "ios" ? 35 : 30,
                          borderWidth: 2,
                          borderColor: "white",
                      }}>
                          <Ionicons
                              name="add"
                              size={32}
                              color={"white"}
                          />
                      </View>
              } 
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarShowLabel: false,
            headerShown: false,
          })
          }
          tabBarOptions={{
            activeTintColor: '#6200ee',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HasNotiScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen
            name="Add"
            component={() => null} 
            options={{
              tabBarButton: (props) => (
                <CustomTabBarButton {...props} onPress={handleOpenBottomSheet}>
                  <View style={styles.addButton}>
                      <Ionicons name="add" size={32} color="white" />
                  </View>
                </CustomTabBarButton>
              ),
            }}
          />
          <Tab.Screen name="Settings" component={SettingNavigator} />
          <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
        <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose={true}>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={handleAddNewKPI}>
              <Text style={styles.optionText}>Add New KPI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleAddNewPlan}>
              <Text style={styles.optionText}>Add New Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleAddNewActivity}>
              <Text style={styles.optionText}>Add New Activity</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
        <BottomSheet
          ref={kpiSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <View style={styles.contentContainer}>
            {currentTab === 0 && (
              <View style={styles.tabContainer}>
                {renderStepIndicator()}
                <Text style={styles.addHeader}>Enter Basic Information</Text>
                <TextInput style={styles.addInput} placeholder='Enter KPI Name' value={kpiName} onChangeText={setKpiName} />
                <TextInput style={styles.addInput} placeholder='Enter KPI Field' value={field} onChangeText={setField} />
                <TextInput style={styles.addInput} placeholder='Description' value={description} onChangeText={setDescription} />                  
                <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
                  <Text style={styles.nextBtnText}>Next</Text>
                </TouchableOpacity>
              </View>
            )}

            {currentTab === 1 && (
              <View style={styles.tabContainer}>
                {renderStepIndicator()}
                <Text style={styles.addHeader}>Set KPI Goals</Text>
                <TextInput style={styles.addInput} placeholder='Specific Goal' value={specificGoal} onChangeText={setSpecificGoal} />

                <TextInput style={styles.addInput} placeholder='Measurement Unit' value={measurementUnit} onChangeText={setMeasurementUnit} />
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Start Date</Text>
                  <DateTimePicker
                    value={startDate}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShowStartDatePicker(false);
                      if (selectedDate) setStartDate(selectedDate);
                    }}
                  />  
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>End Date</Text>
                  <DateTimePicker
                    value={endDate}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShowEndDatePicker(false);
                      if (selectedDate) setEndDate(selectedDate);
                    }}
                  />
                </View>
                    
                <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
                  <Text style={styles.backBtnText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
                  <Text style={styles.nextBtnText}>Next</Text>
                </TouchableOpacity>
                </View>
              </View>
            )}

            {currentTab === 2 && (
              <View style={styles.tabContainer}>
                {renderStepIndicator()}
                <Text style={styles.addHeader}>Select Plans</Text>
                <Text style={styles.label}>Choose one or more Plans</Text>          

                {plans.map((plan) => (
                  <View key={plan} style={styles.planItem}>
                    <TouchableOpacity>
                      <Text>{plan}</Text>
                    </TouchableOpacity>
                    <TextInput
                      style={styles.importanceInput}
                      placeholder="% Importance"
                      editable={selectedPlans[plan] || false}
                      collapsable={true}
                    />
                    <View style={styles.checkbox}>
                      <Checkbox
                          status={selectedPlans[plan] ? 'checked' : 'unchecked'}
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
                <View style={styles.buttonGroup}>      
                  <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
                    <Text style={styles.backBtnText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextBtn} onPress={handleCreateNewKPI}>
                    <Text style={styles.nextBtnText}>Create New KPI</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </BottomSheet>
        <BottomSheet
          ref={actSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <View style={styles.contentContainer}>
            <View style={styles.addContainer}>
              <Text style={styles.addHeader}>Add New Activity</Text>
              <TextInput style={styles.addInput} placeholder="Activity name*" />
              <TextInput style={styles.addInput} placeholder="Type the note here..." />   
              <TouchableOpacity onPress={showDatePicker} style={styles.datePicker} >   
                <Text style={{color: "#9794aa"}}>Date</Text>  
                <Ionicons name='calendar' size={24} color="#9794aa"></Ionicons>
              </TouchableOpacity>      
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <View style={styles.timePickerBox}>
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
              <View style={styles.addSwitchContainer}>
                <Text>Remind me</Text>
                <Switch />
              </View>
              <TouchableOpacity style={styles.createButton} onPress={handleCreateActivity}>
                <Text style={styles.addButtonText}>Create Activity</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet
          ref={planSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <View style={styles.contentContainer}>
          <View style={styles.addContainer}>
              <Text style={styles.addHeader}>Add New Plan</Text>
              <TextInput style={styles.addInput} placeholder="Activity name*" />
              <TextInput style={styles.addInput} placeholder="Enter the goal you want to archive" />   
              <TouchableOpacity onPress={showDatePicker} style={styles.datePicker} >   
                <Text style={{color: "#9794aa"}}>Date</Text>  
                <Ionicons name='calendar' size={24} color="#9794aa"></Ionicons>
              </TouchableOpacity>      
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <View style={styles.timePickerBox}>
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
              <View style={styles.addSwitchContainer}>
                <Text>Remind me</Text>
                <Switch />
              </View>
              <View>
                
              </View>
              <Text style={styles.addActivityTitle}>Select your Activity</Text>
              <ScrollView horizontal style={{width: '100%'}}>
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
              <View style={{flexDirection: 'row', justifyContent: 'space-between',width: '100%', alignItems: 'center', marginVertical: 10,}}>
                <TextInput
                  style={styles.planAddActivityInput}
                  placeholder="Enter new activity"
                  value={newActivity}
                  onChangeText={setNewActivity}
                />
                <TouchableOpacity onPress={addActivity} style={styles.addActivityButton}>
                  <Text style={styles.addActivityText}>+ Add new</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.createButton} onPress={handleCreatePlan}>
                <Text style={styles.addButtonText}>Create Plan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  calendar: {
    marginBottom: 10,
  },
  eventsContainer: {
    paddingHorizontal: 20,
  },
  eventContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTime: {
    color: '#6200ee',
    fontSize: 16,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDescription: {
    color: 'gray',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  customButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -24,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5D5FEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  optionButton: {
    width: '100%',
    backgroundColor: '#5D5FEF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addContainer: {
    width: '100%',
    alignItems: 'center',
  },
  addHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addInput: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  activityOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  activityButton: {
    backgroundColor: '#EAEAEA',
    padding: 10,
    borderRadius: 10,
  },
  addNew: {
    color: '#5D5FEF',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  createButton: {
    width: '100%',
    backgroundColor: '#5D5FEF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTimeButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#5D5FEF',
    borderRadius: 10,
    marginVertical: 10,
  },
  dateTimeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  datePicker: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  timePickerBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  formGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    width: '100%',
    alignItems: 'center',
  },
  stepIndicator: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  step: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: '50%',
    width: 60,
    height: 60,
  },
  activeStep: {
    backgroundColor: '#6200ee',
  },
  stepText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  stepLabel: {
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-around',
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
    width: '30%',
    padding: 12,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  activeStepText: {
    color: '#fff',
  },
  activeStepLabel: {
    color: '#fff',
  },
  backBtn: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    minWidth: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backBtnText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 500,
  },
  nextBtn: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 10,
    minWidth: '30%',
    justifyContent: 'center',
    alignItems:'center'
  },
  nextBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 500,
  }
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
