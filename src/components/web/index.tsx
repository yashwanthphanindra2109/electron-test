import Bootstrap from "assets/style/bootstrap";
import * as Colors from "components/config/colors";
import fonts from "components/config/fonts";
import React, { useState } from "react";
import {
  FlatList as DefaultFlatList,
  Image as DefaultImage,
  ImageBackground as DefaultImageBackground,
  ImageStyle,
  Platform,
  ScrollView as DefaultScrollView,
  StyleProp,
  StyleSheet,
  Text as DefaultText,
  TextInput as DefaultTextInput,
  TextInputProps,
  TextStyle,
  View as DefaultView,
  ViewStyle,
} from "react-native";
interface customProps {
  children?: React.ReactNode;
  style?:
    | StyleProp<ViewStyle | ImageStyle | TextStyle>
    | Array<StyleProp<ViewStyle | ImageStyle | TextStyle>>;
  className?: string;
  [x: string]: any;
}
interface imageProps {
  children?: React.ReactNode;
  source?: any;
  style?: StyleProp<ImageStyle> | Array<StyleProp<ImageStyle>>;
  className?: string;
  [x: string]: any;
}

const View = ({ children, className, style, ...rest }: customProps) => {
  return (
    <DefaultView
      style={[styling(className), Array.isArray(style) ? [...style] : style]}
      {...rest}
    >
      {children}
    </DefaultView>
  );
};
const Text = ({ children, className, style, ...rest }: customProps) => {
  return (
    <DefaultText
      style={[
        styling(className),
        Array.isArray(style) ? [...style] : style,
        fontStyle,
      ]}
      {...rest}
    >
      {children}
    </DefaultText>
  );
};

const Image = ({ className, style, source, ...rest }: imageProps) => {
  const [imageError, setImageError] = useState(false);
  return (
    <DefaultImage
      style={[styling(className), Array.isArray(style) ? [...style] : style]}
      source={imageError ? require("assets/images/placeholder.png") : source}
      {...rest}
      onError={() => setImageError(true)}
    />
  );
};
const ImageBackground = ({
  children,
  className,
  style,
  source,
  ...rest
}: imageProps) => {
  return (
    <DefaultImageBackground
      source={source}
      style={[styling(className), Array.isArray(style) ? [...style] : style]}
      {...rest}
    >
      {children}
    </DefaultImageBackground>
  );
};
const FlatList = ({
  children,
  className,
  data,
  renderItem,
  style,
  keyExtractor,
  ...rest
}: customProps) => {
  return (
    <DefaultFlatList
      style={[styling(className), Array.isArray(style) ? [...style] : style]}
      {...rest}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    >
      {children}
    </DefaultFlatList>
  );
};
const ScrollView = ({ children, className, style, ...rest }: customProps) => {
  return (
    <DefaultScrollView
      style={[styling(className), Array.isArray(style) ? [...style] : style]}
      {...rest}
    >
      {children}
    </DefaultScrollView>
  );
};

const TextInput = ({
  children,
  className,
  style,
  placeholderTextColor,
  placeholder,
  onChangeText,
  ref,
  value,
  returnKeyType,
  secureTextEntry,
  ...rest
}: TextInputProps & customProps) => {
  return (
    <DefaultTextInput
      style={[styling(className), Array.isArray(style) ? [...style] : style]}
      placeholderTextColor={placeholderTextColor}
      onChangeText={(e) => onChangeText(e)}
      placeholder={placeholder}
      ref={ref}
      value={value}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      {...rest}
    >
      {children}
    </DefaultTextInput>
  );
};
const Divider = ({ children, className, style, ...rest }: customProps) => {
  return (
    <DefaultView
      style={[
        styling(className),
        Array.isArray(style) ? [...style] : style,
        { height: StyleSheet.hairlineWidth, backgroundColor: Colors.grey1 },
      ]}
      {...rest}
    >
      {children}
    </DefaultView>
  );
};

const styling = (className: string) => {
  const classArray = className
    ? className.replace(new RegExp("-", "g"), "_").split(" ")
    : [];
  const styleArray = [];
  for (let c of classArray) {
    if (Bootstrap[c]) styleArray.push(Bootstrap[c]);
  }
  return styleArray;
};
const fontStyle = {
  fontFamily: Platform.select({
    android: "sans-serif",
    default: "Roboto-Regular",
  }),
};
export {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  TextInput,
  Colors,
  fonts,
  Divider,
};
