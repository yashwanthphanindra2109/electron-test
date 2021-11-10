import React from "react";
import { View, Text } from "components";
import { storeTabs } from "config/navigator";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "screens/main/dashboard.web";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SlideBar from "screens/main/SlideBar";
const Stack = createStackNavigator();

export default function MainStackElectron(props) {
  return (
    // <View className="body">
    //   <View className="row">
    //     <SlideBar {...props} />
    //     <Stack.Navigator
    //       initialRouteName={storeTabs.dashboard}
    //       screenOptions={{ gestureEnabled: false }}
    //     >
    //       <Stack.Screen
    //         options={{ headerShown: false }}
    //         name={storeTabs.dashboard}
    //         component={Dashboard}
    //       />


    //     </Stack.Navigator>
    //   </View>
    // </View>
    <View>
      <Text>pryp</Text>
    </View>
  );
}
