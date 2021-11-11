import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "components";
import { Button } from "react-native-paper"
import Apps from "./src/Apps.electron";
import { Calendar, modeToNum } from 'react-native-big-calendar';
import { startClock } from "react-native-reanimated";
import { Title } from "react-native-paper";


const events = [
  {
    title: 'Meeting',
    start: new Date(2021, 10, 11, 10, 0),
    end: new Date(2021, 10, 11, 13, 30),
  },
  {
    title: 'Coffee break',
    start: new Date(2021, 10, 11, 15, 45),
    end: new Date(2021, 10, 11, 18, 30),
  },
]
const next = () => {
  console.log("go to next");
}
const previous = () => {
  console.log("go to Previous");
}

export default function App() {

  return (
    // <View style={styles.container} className="pt-2">
    //   <View style={styles.create}>
    //     <Text style={{ fontWeight: "bold" }}>Testing paper and Example</Text>
    //     {/* <Apps /> */}
    //   </View>


    //   <StatusBar style="dark" />
    // </View>
    <View>
      <View className="row">

        <View className="col-6" style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Button onPress={() => { previous() }}>Previous</Button>
        </View>
        <View className="col-6" style={{ alignItems: 'flex-end' }}>
          <Button onPress={() => { next() }}>Next</Button>
        </View>

      </View>
      <View className="row">
        <View className="col-12">
          <Text style={{ alignItems: 'flex-start', fontSize: 20 }} className="ps-3">November</Text>
        </View>
      </View>


      <View className="">
        <Calendar events={events} height={600} date={new Date(2021, 10, 11, 10, 0)} activeDate={new Date(2021, 10, 11, 11, 0)} swipeEnabled />
      </View>


    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  create: {
    width: "20%",
    height: "10%",
    backgroundColor: "pink",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    width: "100%"
  }
});
