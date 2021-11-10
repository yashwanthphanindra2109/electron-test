import React, { Component } from "react";
import { StatusBar, StyleProp, ViewStyle } from "react-native";
// import Router from "navigation/route-switch";
import Router from "navigation/route-switch"
import { View, Text } from "components";
class AppRouter extends Component<any> {

  render() {
    const theme = "light";
    const colors = {
      primary: "#0b2947",
      secondary: "#777777",
      bgColor: "#ffffff",
      bgColorSecondary: "#f4f4f4",
    };

    const barStyle = theme === "light" ? "dark-content" : "light-content";
    return (
      <View>

        <StatusBar
          translucent
          barStyle={barStyle}
          backgroundColor="transparent"
        />
        {/* <Text>Yashwanth phanindra</Text> */}
        <Router />
      </View>
    );
  }
}

export default AppRouter;
