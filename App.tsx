import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, } from 'react-native-big-calendar';
const events = [
  {
    title: 'Meeting',
    start: new Date(2021, 9, 11, 10, 0),
    end: new Date(2021, 9, 11, 13, 30),
  },
  {
    title: 'Coffee break',
    start: new Date(2021, 10, 11, 15, 45),
    end: new Date(2021, 10, 11, 18, 30),
  },
]
export default function App() {
  return (
    // <View style={styles.container}>
    //   <View style={styles.create}>
    //     <Text style={{ fontWeight: 'bold' }}>Test Electron using expo dependency</Text>
    //   </View>
    //   <StatusBar style="dark" />
    // </View>
    <View>
      <Calendar events={events} height={600} mode={'month'} swipeEnabled date={new Date(2021, 8, 21, 10, 0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,

  },
  create: {
    width: "20%",
    height: "10%",
    backgroundColor: 'pink',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
