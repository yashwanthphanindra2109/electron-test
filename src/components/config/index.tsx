import Constants from "expo-constants";
import BackgroundImage from "./BackgroundImage";
import * as colors from "./colors";
import fonts, { lineHeights, sizes } from "./fonts";
import spacing from "./spacing";
import ThemeProvider, { ThemeConsumer } from "./ThemeProvider";
import withTheme from "./withTheme";
const statusBarHeight = () => {
  return Constants.statusBarHeight;
};

export {
  BackgroundImage,
  colors,
  statusBarHeight,
  fonts,
  sizes,
  lineHeights,
  ThemeProvider,
  ThemeConsumer,
  withTheme,
  spacing,
};
