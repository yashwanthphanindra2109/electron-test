import { NavigationContainer } from "@react-navigation/native";
import navConfig from "config/linking";
import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationService from "utils/navigation";
import AppRouter from "./AppRouter";

function Apps() {
  return (
    <NavigationContainer
      ref={(navigationRef) =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }
      linking={navConfig}
      fallback={<Text>Loading...</Text>}
    >
      <SafeAreaProvider>
        <AppRouter />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default Apps;
