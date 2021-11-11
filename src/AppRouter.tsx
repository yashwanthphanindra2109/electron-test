import { ThemeProvider } from "components/config";
import { darkColors, getThemeLight } from "components/config/theme";
import Router from "navigation/root-switch";
import React, { Component } from "react";
import { StatusBar } from "react-native";
class AppRouter extends Component {
  render() {
    const theme = "light";
    const colors = {
      primary: "#0b2947",
      secondary: "#777777",
      bgColor: "#ffffff",
      bgColorSecondary: "#f4f4f4",
    };
    const themeColor = theme === "light" ? getThemeLight(colors) : darkColors;
    const barStyle = theme === "light" ? "dark-content" : "light-content";
    return (
      <ThemeProvider theme={themeColor}>
        <StatusBar
          translucent
          barStyle={barStyle}
          backgroundColor="transparent"
        />
        <Router />
      </ThemeProvider>
    );
  }
}

export default AppRouter;
