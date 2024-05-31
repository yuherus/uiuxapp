import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Header from '../components/Header';
import { Calendar } from 'react-native-calendars';
import { ProgressChart } from 'react-native-chart-kit' 
const screenWidth = Dimensions.get('window').width;

const renderEvent = (time, title, description) => (
    <View style={styles.eventContainer} key={title}>
        <Text style={styles.eventTime}>{time}</Text>
        <View>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.eventTitle}>{title}</Text>
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.eventDescription}>{description}</Text>
        </View>
    </View>
);

const taskData = [
    { date: '2024-05-02', data: [{ time: '08:00', title: 'Meeting', description: 'Meeting with team' },    { time: '10:00', title: 'Learning', description: 'Learn UI-UX course' },] },
    { date: '2024-05-03', data: [{ time: '08:00', title: 'Sport', description: 'Play football final match' },    { time: '10:00', title: 'Meeting', description: 'Meeting with team' },] },
    { date: '2024-05-04', data: [{ time: '08:00', title: 'Mindfulness Meditation', description: 'Practice mindfulness meditation daily to reduce stress and improve mental clarity' },    { time: '10:00', title: 'Meeting', description: 'Meeting with team' },] },
    { date: '2024-05-05', data: [{ time: '08:00', title: 'Meeting', description: 'Meeting with team' },    { time: '10:00', title: 'Deep Breathing Exercises', description: 'Perform deep breathing exercises to calm the mind and body' },] },
];

const chartData = [0.4, 0.6, 0.8];
const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
    strokeWidth: 2,
};



const HomeScreen = ({navigation}) => {
    const [day, setDay] = useState('2024-05-02');
    const [hasTask, setHasTask] = useState(false);

  return (
    <View style={styles.container}>
      <Header title={'Home'} navigation={navigation} />
      <ScrollView>
        <View style={styles.searchContainer}>
            <View style={styles.searchInput}>
                <TouchableOpacity>
                  <Ionicons name="search" size={24} color="#ddd" />
                </TouchableOpacity>
                <TextInput style={{paddingLeft: 10}} placeholder="Search anything here..." />
            </View>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="filter-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Schedule</Text>
        <Calendar
            style={styles.calendar}
            current={'2024-05-02'}
            minDate={'2022-05-10'}
            maxDate={'2024-05-30'}
            monthFormat={'MMMM yyyy'}
            hideArrows={false}
            hideExtraDays={true}
            disableMonthChange={true}
            firstDay={1}
            onDayPress={(day) => {
            setDay(day.dateString);
        
            }}
            theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#6200ee',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#6200ee',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'black',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
            }}
            markedDates={{
            '2024-05-02': { selected: true, marked: true, selectedColor: '#6200ee' },
            '2024-05-03': { marked: true },
            '2024-05-04': { marked: true, dotColor: '#50cebb' },
            '2024-05-05': { marked: true, dotColor: '#50cebb' },
            }}
        />
        <Text style={styles.sectionTitle}>Today's Task</Text>
        {
            taskData.map((item) => {
                if (item.date === day) {
                return (
                    <View style={styles.scheduleContainer} key={item.date}>
                        {
                            item.data.map((event) => {
                                return renderEvent(event.time, event.title, event.description);
                            })
                        }
                    </View>
                );
                } 
            })
        }

        <Text style={styles.sectionTitle}>KPI Stactics</Text>
        <ProgressChart
            data={chartData}
            width={screenWidth-20}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
        />
        {/* Chú thích cho chart */}
        
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#6200EE',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',    
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: '#6200EE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
    paddingVertical: 10,
  },
  kpiContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  kpiText: {
    position: 'absolute',
    alignSelf: 'center',
    top: '45%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#6200EE',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
    calendar: {
        marginHorizontal: 10,
        borderRadius: 20,
        marginBottom: 20,
    },
    chart: {
        marginHorizontal: 10,
        borderRadius: 20,
        marginBottom: 20,
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
        marginBottom: 5,
      },
      eventDescription: {
        color: 'gray',
        fontSize: 14,
        width: screenWidth - 100,
      },
      scheduleContainer: {
        paddingHorizontal: 20,
        marginVertical: 10,
      },
});

export default HomeScreen;
