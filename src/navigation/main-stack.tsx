import { createStackNavigator } from "@react-navigation/stack";
import { storeTabs } from "config/navigator";
import React from "react";
import Dashboard from "screens/dashboard";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={storeTabs.dashboard}
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name={storeTabs.dashboard}
          component={Dashboard}
        />
      </Stack.Navigator>
    </>
  );
}

export default MainStack;
