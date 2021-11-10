import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet } from "react-native";
import { View, Text } from "components";
import Apps from "./src/Apps.electron";
export default function App() {

  return (
    <View >
      <View >
        {/* <Text>Yashwanth</Text> */}
        <Apps />
      </View>


      <StatusBar style="dark" />
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
});
