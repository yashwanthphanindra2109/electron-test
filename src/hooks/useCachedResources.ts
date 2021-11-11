import { Feather, Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Platform } from "react-native";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        if (Platform.OS != "web") {
          SplashScreen.preventAutoHideAsync();
        } // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...Feather.font,
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        if (Platform.OS != "web") {
          SplashScreen.hideAsync();
        }
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
