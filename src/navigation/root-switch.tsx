import { createStackNavigator } from "@react-navigation/stack";
import { rootSwitch } from "config/navigator";
import React from "react";
import MainStack from "./main-stack";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={rootSwitch.main} component={MainStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
