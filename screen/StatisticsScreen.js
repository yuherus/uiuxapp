import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { PieChart, BarChart, StackedBarChart, LineChart } from 'react-native-chart-kit';
import Header from '../components/Header';

const screenWidth = Dimensions.get('window').width;

const StatisticsScreen = ({ navigation }) => {
  const pieData = [
    { name: 'Language', population: 12, color: '#0062ff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Research', population: 15, color: '#ff974a', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'School', population: 13, color: '#3dd598', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Intern', population: 41, color: '#ffc542', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  const barData ={
    labels: ['Jan', 'Apr', 'Jul', 'Oct'],
    legend: ['Expected', 'Reality'],
    data: [
      [60, 40],
      [30, 20],
      [80, 70],
      [90, 120],
    ],
    barColors: ['#d9d6fe', '#cbcad7'],
   }

   const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 43 ],
      color: (opacity = 1) => `rgba(20, 20, 20, ${opacity})` 
    }]
  }

  return (
    <View style={styles.container}>
        <Header title={'Statistics'} navigation={navigation}/>
        <ScrollView style={styles.statisticsContainer}>
            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Monthly Completed Task</Text>
                <PieChart
                data={pieData}
                width={screenWidth - 32}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                center={[10, 10]}
                absolute
                />
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Expected vs Reality</Text>
                <StackedBarChart
                data={barData}
                width={screenWidth - 60}
                height={300}
                chartConfig={chartConfig}
                verticalLabelRotation={30}

                />
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Working Hours</Text>
                <LineChart
                data={lineData}
                width={screenWidth - 60}
                height={220}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                />
            </View>
        </ScrollView>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#fafafa",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    statisticsContainer: {
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    chartContainer: {
        marginBottom: 32,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
});

export default StatisticsScreen;
