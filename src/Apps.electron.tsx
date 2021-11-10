import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavigationService from "utils/navigation";
import AppRouter from "./AppRouter";

// const { store, persistor } = configureStore();

function Apps() {
    return (
        <NavigationContainer
            ref={(navigationRef) =>
                NavigationService.setTopLevelNavigator(navigationRef)
            }
            fallback={<Text>Loading...</Text>}
        >
            <SafeAreaProvider>

                <AppRouter />
            </SafeAreaProvider>
        </NavigationContainer>



    );
}

export default Apps;
