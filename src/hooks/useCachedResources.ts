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
          "Roboto-Light":
            "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2",
          "Roboto-Regular":
            "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2",
          "Roboto-Medium":
            "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2",
          "Roboto-Bold":
            "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
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
