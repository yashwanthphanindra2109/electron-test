import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Platform, Text, View } from "react-native";
// import InfoStack from "./info-stack";
import MainStackElectron from "./main-electron-stack";
import { rootSwitch } from "config/navigator"
const Stack = createStackNavigator();

function RootStack() {
  return (
    // <Text>yash</Text>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {Platform.select({
        web: (
          <>
          
          </>
        ),

      })} */}
      <Stack.Screen name={rootSwitch.main} component={MainStackElectron} />
    </Stack.Navigator>
  );
}

export default RootStack;
