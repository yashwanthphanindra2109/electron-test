import { Platform, StyleSheet, Dimensions, ImageStyle } from "react-native";
import { ViewStyle, StyleProp, TextStyle } from "react-native";
import deepmerge from "deepmerge";
import custom from "./custom";
const { width, height } = Dimensions.get("window");
/*antdesign
entypo
evilicon
feather
font-awesome
font-awesome-5
fontisto
foundation
ionicon
material
material-community
octicon
simple-line-icon
zocial
*/
interface RootType {
  "-blue": string;
  "-indigo": string;
  "-purple": string;
  "-pink": string;
  "-red": string;
  "-orange": string;
  "-yellow": string;
  "-green": string;
  "-teal": string;
  "-cyan": string;
  "-white": string;
  "-gray": string;
  "-grayDark": string;
  "-light": string;
  "-lighter": string;
  "-primary": string;
  "-secondary": string;
  "-success": string;
  "-info": string;
  "-warning": string;
  "-danger": string;
  "-dark": string;
  "-default": string;
  "-neutral": string;
  "-darker": string;
  "-breakpointXs": number;
  "-breakpointSm": number;
  "-breakpointMd": number;
  "-breakpointLg": number;
  "-breakpointXl": number;
  "-breakpointXXl": number;
  "--bs-font-roboto-regular": string;
  "--bs-font-sans-serif": string;
  "-bsGutterY": string;
  "-bsGutterX": number;
  "--bs-gutter-x": number;
  "--bs-gutter-y": number;
  fontSize: number;
  [x: string]: any;
}

const root: RootType = {
  "-blue": "#5e72e4",
  "-indigo": "#5603ad",
  "-purple": "#8965e0",
  "-pink": "#f3a4b5",
  "-red": "#f5365c",
  "-orange": "#fb6340",
  "-yellow": "#ffd600",
  "-green": "#2dce89",
  "-teal": "#11cdef",
  "-cyan": "#2bffc6",
  "-white": "#fff",
  "-gray": "#8898aa",
  "-grayDark": "#32325d",
  "-light": "#adb5bd",
  "-lighter": "#e9ecef",
  "-primary": "#5e72e4",
  "-secondary": "#f7fafc",
  "-success": "#2dce89",
  "-info": "#11cdef",
  "-warning": "#fb6340",
  "-danger": "#f5365c",
  "-dark": "#212529",
  "-default": "#172b4d",
  "-neutral": "#fff",
  "-darker": "black",
  "-breakpointXs": 0,
  "-breakpointSm": 576,
  "-breakpointMd": 768,
  "-breakpointLg": 992,
  "-breakpointXl": 1200,
  "-breakpointXXl": 1400,
  // "--bs-font-roboto-regular": "Roboto-Regular",
  // "--bs-font-sans-serif": "sans-serif",
  "-bsGutterY": "0",
  "-bsGutterX": 1.5 * 16,
  fontSize: 16,
  "--bs-gutter-x": 0,
  "--bs-gutter-y": 1.5 * 16,
  light: "Roboto-Light",
  regular: "Roboto-Regular",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
};
export const rem = (e: number) => e * root.fontSize;

const col_sm = {
  col_sm_auto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "auto",
  },
  col_sm_1: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "8.33333333%",
  },
  col_sm_2: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "16.66666667%",
  },
  col_sm_3: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "25%",
  },
  col_sm_4: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "33.33333333%",
  },
  col_sm_5: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "41.66666667%",
  },
  col_sm_6: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "50%",
  },
  col_sm_7: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "58.33333333%",
  },
  col_sm_8: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "66.66666667%",
  },
  col_sm_9: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "75%",
  },
  col_sm_10: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "83.33333333%",
  },
  col_sm_11: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "91.66666667%",
  },
  col_sm_12: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "100%",
  },
  offset_sm_0: {
    marginLeft: 0,
  },
  offset_sm_1: {
    marginLeft: "8.33333333%",
  },
  offset_sm_2: {
    marginLeft: "16.66666667%",
  },
  offset_sm_3: {
    marginLeft: "25%",
  },
  offset_sm_4: {
    marginLeft: "33.33333333%",
  },
  offset_sm_5: {
    marginLeft: "41.66666667%",
  },
  offset_sm_6: {
    marginLeft: "50%",
  },
  offset_sm_7: {
    marginLeft: "58.33333333%",
  },
  offset_sm_8: {
    marginLeft: "66.66666667%",
  },
  offset_sm_9: {
    marginLeft: "75%",
  },
  offset_sm_10: {
    marginLeft: "83.33333333%",
  },
  offset_sm_11: {
    marginLeft: "91.66666667%",
  },
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundColor: "#fff",
    backgroundClip: "border-box",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.125)",
    borderStyle: "solid",
    borderTopLeftRadius: rem(0.5),
    borderTopRightRadius: rem(0.5),
    borderBottomRightRadius: rem(0.5),
    borderBottomLeftRadius: rem(0.5),
    ...Platform.select({
      android: {
        elevation: 10,
        backgroundColor: "#FFF",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          height: 20,
          width: -5,
        },
        shadowRadius: 15,
        zIndex: 10,
        shadowOpacity: 0.1,
      },
    }),
  },
  justify_content_start: {
    justifyContent: "flex-start",
  },
  justify_content_end: {
    justifyContent: "flex-end",
  },
  justify_content_center: {
    justifyContent: "center",
  },
  justify_content_between: {
    justifyContent: "space-between",
  },
  justify_content_around: {
    justifyContent: "space-around",
  },
  justify_content_evenly: {
    justifyContent: "space-evenly",
  },
  align_items_start: {
    alignItems: "flex-start",
  },
  align_items_end: {
    alignItems: "flex-end",
  },
  align_items_center: {
    alignItems: "center",
  },
  align_items_baseline: {
    alignItems: "baseline",
  },
  align_items_stretch: {
    alignItems: "stretch",
  },
  align_content_start: {
    alignContent: "flex-start",
  },
  align_content_end: {
    alignContent: "flex-end",
  },
  align_content_center: {
    alignContent: "center",
  },
  align_content_between: {
    alignContent: "space-between",
  },
  align_content_around: {
    alignContent: "space-around",
  },
  align_content_stretch: {
    alignContent: "stretch",
  },
  align_self_auto: {
    alignSelf: "auto",
  },
  align_self_start: {
    alignSelf: "flex-start",
  },
  align_self_end: {
    alignSelf: "flex-end",
  },
  align_self_center: {
    alignSelf: "center",
  },
  align_self_baseline: {
    alignSelf: "baseline",
  },
  align_self_stretch: {
    alignSelf: "stretch",
  },
  justify_content_sm_start: {
    justifyContent: "flex-start",
  },
  justify_content_sm_end: {
    justifyContent: "flex-end",
  },
  justify_content_sm_center: {
    justifyContent: "center",
  },
  justify_content_sm_between: {
    justifyContent: "space-between",
  },
  justify_content_sm_around: {
    justifyContent: "space-around",
  },
  justify_content_sm_evenly: {
    justifyContent: "space-evenly",
  },
  align_items_sm_start: {
    alignItems: "flex-start",
  },
  align_items_sm_end: {
    alignItems: "flex-end",
  },
  align_items_sm_center: {
    alignItems: "center",
  },
  align_items_sm_baseline: {
    alignItems: "baseline",
  },
  align_items_sm_stretch: {
    alignItems: "stretch",
  },
  align_content_sm_start: {
    alignContent: "flex-start",
  },
  align_content_sm_end: {
    alignContent: "flex-end",
  },
  align_content_sm_center: {
    alignContent: "center",
  },
  align_content_sm_between: {
    alignContent: "space-between",
  },
  align_content_sm_around: {
    alignContent: "space-around",
  },
  align_content_sm_stretch: {
    alignContent: "stretch",
  },
  align_self_sm_auto: {
    alignSelf: "auto",
  },
  align_self_sm_start: {
    alignSelf: "flex-start",
  },
  align_self_sm_end: {
    alignSelf: "flex-end",
  },
  align_self_sm_center: {
    alignSelf: "center",
  },
  align_self_sm_baseline: {
    alignSelf: "baseline",
  },
  align_self_sm_stretch: {
    alignSelf: "stretch",
  },
};
const col_md = {
  col_md_auto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "auto",
  },
  col_md_1: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "8.33333333%",
  },
  col_md_2: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "16.66666667%",
  },
  col_md_3: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "25%",
  },
  col_md_4: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "33.33333333%",
  },
  col_md_5: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "41.66666667%",
  },
  col_md_6: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "50%",
  },
  col_md_7: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "58.33333333%",
  },
  col_md_8: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "66.66666667%",
  },
  col_md_9: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "75%",
  },
  col_md_10: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "83.33333333%",
  },
  col_md_11: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "91.66666667%",
  },
  col_md_12: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "100%",
  },
  offset_md_0: {
    marginLeft: 0,
  },
  offset_md_1: {
    marginLeft: "8.33333333%",
  },
  offset_md_2: {
    marginLeft: "16.66666667%",
  },
  offset_md_3: {
    marginLeft: "25%",
  },
  offset_md_4: {
    marginLeft: "33.33333333%",
  },
  offset_md_5: {
    marginLeft: "41.66666667%",
  },
  offset_md_6: {
    marginLeft: "50%",
  },
  offset_md_7: {
    marginLeft: "58.33333333%",
  },
  offset_md_8: {
    marginLeft: "66.66666667%",
  },
  offset_md_9: {
    marginLeft: "75%",
  },
  offset_md_10: {
    marginLeft: "83.33333333%",
  },
  offset_md_11: {
    marginLeft: "91.66666667%",
  },
};
const col_lg = {
  col_lg_auto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "auto",
  },
  col_lg_1: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "8.33333333%",
  },
  col_lg_2: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "16.66666667%",
  },
  col_lg_3: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "25%",
  },
  col_lg_4: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "33.33333333%",
  },
  col_lg_5: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "41.66666667%",
  },
  col_lg_6: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "50%",
  },
  col_lg_7: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "58.33333333%",
  },
  col_lg_8: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "66.66666667%",
  },
  col_lg_9: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "75%",
  },
  col_lg_10: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "83.33333333%",
  },
  col_lg_11: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "91.66666667%",
  },
  col_lg_12: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "100%",
  },
  offset_lg_0: {
    marginLeft: 0,
  },
  offset_lg_1: {
    marginLeft: "8.33333333%",
  },
  offset_lg_2: {
    marginLeft: "16.66666667%",
  },
  offset_lg_3: {
    marginLeft: "25%",
  },
  offset_lg_4: {
    marginLeft: "33.33333333%",
  },
  offset_lg_5: {
    marginLeft: "41.66666667%",
  },
  offset_lg_6: {
    marginLeft: "50%",
  },
  offset_lg_7: {
    marginLeft: "58.33333333%",
  },
  offset_lg_8: {
    marginLeft: "66.66666667%",
  },
  offset_lg_9: {
    marginLeft: "75%",
  },
  offset_lg_10: {
    marginLeft: "83.33333333%",
  },
  offset_lg_11: {
    marginLeft: "91.66666667%",
  },
};
const col_xl = {
  col_xl_auto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "auto",
  },
  col_xl_1: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "8.33333333%",
  },
  col_xl_2: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "16.66666667%",
  },
  col_xl_3: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "25%",
  },
  col_xl_4: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "33.33333333%",
  },
  col_xl_5: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "41.66666667%",
  },
  col_xl_6: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "50%",
  },
  col_xl_7: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "58.33333333%",
  },
  col_xl_8: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "66.66666667%",
  },
  col_xl_9: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "75%",
  },
  col_xl_10: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "83.33333333%",
  },
  col_xl_11: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "91.66666667%",
  },
  col_xl_12: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "100%",
  },
  offset_xl_0: {
    marginLeft: 0,
  },
  offset_xl_1: {
    marginLeft: "8.33333333%",
  },
  offset_xl_2: {
    marginLeft: "16.66666667%",
  },
  offset_xl_3: {
    marginLeft: "25%",
  },
  offset_xl_4: {
    marginLeft: "33.33333333%",
  },
  offset_xl_5: {
    marginLeft: "41.66666667%",
  },
  offset_xl_6: {
    marginLeft: "50%",
  },
  offset_xl_7: {
    marginLeft: "58.33333333%",
  },
  offset_xl_8: {
    marginLeft: "66.66666667%",
  },
  offset_xl_9: {
    marginLeft: "75%",
  },
  offset_xl_10: {
    marginLeft: "83.33333333%",
  },
  offset_xl_11: {
    marginLeft: "91.66666667%",
  },
};
const col_xxl = {
  col_xxl_auto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "auto",
  },
  col_xxl_1: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "8.33333333%",
  },
  col_xxl_2: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "16.66666667%",
  },
  col_xxl_3: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "25%",
  },
  col_xxl_4: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "33.33333333%",
  },
  col_xxl_5: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "41.66666667%",
  },
  col_xxl_6: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "50%",
  },
  col_xxl_7: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "58.33333333%",
  },
  col_xxl_8: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "66.66666667%",
  },
  col_xxl_9: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "75%",
  },
  col_xxl_10: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "83.33333333%",
  },
  col_xxl_11: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "91.66666667%",
  },
  col_xxl_12: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "100%",
  },
  offset_xxl_0: {
    marginLeft: 0,
  },
  offset_xxl_1: {
    marginLeft: "8.33333333%",
  },
  offset_xxl_2: {
    marginLeft: "16.66666667%",
  },
  offset_xxl_3: {
    marginLeft: "25%",
  },
  offset_xxl_4: {
    marginLeft: "33.33333333%",
  },
  offset_xxl_5: {
    marginLeft: "41.66666667%",
  },
  offset_xxl_6: {
    marginLeft: "50%",
  },
  offset_xxl_7: {
    marginLeft: "58.33333333%",
  },
  offset_xxl_8: {
    marginLeft: "66.66666667%",
  },
  offset_xxl_9: {
    marginLeft: "75%",
  },
  offset_xxl_10: {
    marginLeft: "83.33333333%",
  },
  offset_xxl_11: {
    marginLeft: "91.66666667%",
  },
};
const navBarWidth = rem(5);
const isValid = (e: any) => !(e === undefined || e === null || e === "");

const varCal = (key: string, value?: any) => {
  return isValid(root[key]) ? root[key] : value;
};

const calc = (
  left: string | number,
  operator: string,
  right: string | number
): number => {
  const leftVal: number =
    typeof left == "number"
      ? left
      : left.includes("rem")
        ? rem(parseFloat(left.trim().replace("rem", "")))
        : left.includes("vw")
          ? parseFloat(left.trim().replace("vw", "")) * 0.01 * width
          : parseFloat(left);
  const rightVal: number =
    typeof right == "number"
      ? right
      : right.includes("rem")
        ? rem(parseFloat(right.trim().replace("rem", "")))
        : right.includes("vw")
          ? parseFloat(right.trim().replace("vw", "")) * 0.01 * width
          : parseFloat(right);
  return operator == "-"
    ? leftVal - rightVal
    : operator == "*"
      ? leftVal * rightVal
      : leftVal + rightVal;
};

const appendToStyle = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    style[key] = obj[key];
  });
};

interface StyleProps {
  row: StyleProp<ViewStyle>;
  // [x: string]: StyleProp<ViewStyle | ImageStyle | TextStyle>;
  [x: string]: any;
}

const style: StyleProps = {
  body: {
    margin: 0,
    padding: 0,
    // fontFamily: Platform.select({
    //   android: root["--bs-font-sans-serif"],
    //   default: root["--bs-font-roboto-regular"],
    // }),
    // fontSize: rem(1),
    // fontWeight: "400",
    // lineHeight: "1.5",
    // color: "#212529",
    backgroundColor: varCal("-light"),
    // flexWrap: 1,
  },
  main: {
    // marginLeft: rem(5),
    padding: rem(1),
  },
  main_hover: {
    marginLeft: rem(30),
  },
  navbar: {
    width: navBarWidth,
    height: height,
    display: "flex",
    backgroundColor: varCal("-dark"),
    opacity: 1,
  },
  navbar_nav: {
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    height: "100%",
  },
  nav_item: {
    width: "100%",
  },
  nav_icon: {
    minWidth: rem(2),
    marginLeft: rem(1.5),
    marginRight: rem(1.5),
    marginTop: 0,
    marginBottom: 0,
  },
  nav_header_link: {
    display: "flex",
    alignItems: "center",
    height: rem(5),
    color: varCal("-blue"),
    flexDirection: "row",
  },
  nav_link: {
    display: "flex",
    alignItems: "center",
    height: rem(3.5),
    color: varCal("-blue"),
    flexDirection: "row",
  },
  nav_sub_link: {
    display: "flex",
    alignItems: "center",
    height: rem(2.5),
    flexDirection: "row",
  },
  link_text: {
    display: "none",
    marginLeft: rem(1),
    color: "rgba(255,255,255,0.5)",
    fontWeight: "600",
  },
  sub_link_text: {
    display: "none",
    marginLeft: rem(1),
    color: varCal("-white"),
  },
  navbar_hover: {
    width: rem(18),
  },
  logo: {
    marginBottom: rem(1),
    width: "100%",
  },
  logo_text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    color: varCal("-secondary"),
    letterSpacing: rem(0.2),
    fontSize: rem(2),
  },
  h1: {
    marginTop: 0,
    marginBottom: rem(0.5),
    fontWeight: "500",
    lineHeight: 1.2,
    fontSize: calc("1.375rem", "+", "1.5vw"),
    // fontFamily: Platform.select({
    //   android: root["--bs-font-sans-serif"],
    //   default: root["--bs-font-roboto-regular"],
    // }),
  },
  h2: {
    marginTop: 0,
    marginBottom: rem(0.5),
    fontWeight: "500",
    // lineHeight: 10,
    // textAlign: "justify",
    fontSize: calc("1.325rem", "+", "0.9vw"),
    // fontFamily: Platform.select({
    //   android: root["--bs-font-sans-serif"],
    //   default: root["--bs-font-roboto-regular"],
    // }),
  },
  h3: {
    marginTop: 0,
    // marginBottom: rem(0.5),
    fontWeight: "500",
    fontSize: calc("1.3rem", "+", "0.6vw"),
    // fontFamily: Platform.select({
    //   android: root["--bs-font-sans-serif"],
    //   default: root["--bs-font-roboto-regular"],
    // }),
  },
  h4: {
    marginTop: 0,
    // marginBottom: rem(0.5),
    fontWeight: "500",
    // lineHeight: 1.2,
    fontSize: calc("1.275rem", "+", "0.3vw"),
    // fontFamily: Platform.select({
    //   android: root["--bs-font-sans-serif"],
    //   default: root["--bs-font-roboto-regular"],
    // }),
  },
  h5: {
    marginTop: 0,
    marginBottom: rem(0.5),
    fontWeight: "500",
    // lineHeight: 1.2,
    fontSize: rem(1.25),
    // fontFamily: Platform.select({
    //   android: root["--bs-font-sans-serif"],
    //   default: root["--bs-font-roboto-regular"],
    // }),
  },
  h6: {
    marginTop: 0,
    marginBottom: rem(0.5),
    fontWeight: "500",
    // lineHeight: 1.2,
    fontSize: rem(1),
    // fontFamily: Platform.select({
    //   android: root["--bs-font-sans-serif"],
    //   default: root["--bs-font-roboto-regular"],
    // }),
  },
  p: {
    marginTop: 0,
    marginBottom: rem(1),
  },
  sub: {
    fontSize: rem(0.75),
    lineHeight: 0,
    bottom: "-0.25em",
  },
  fieldset: {
    minWidth: 0,
    padding: 0,
    margin: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  legend: {
    textAlign: "left",
    width: "100%",
    padding: 0,
    marginBottom: rem(0.5),
    fontSize: calc("1.275rem", "+", "0.3vw"),
  },
  sup: {
    fontSize: rem(0.75),
    lineHeight: 0,
    textAlignVertical: "bottom",
    top: "-0.5em",
  },
  a: {
    color: "#0d6efd",
    // textDecoration:"underline"
  },
  container: {
    width: "100%",
    paddingRight: varCal("--bs-gutter-x", rem(0.75)),
    paddingLeft: varCal("--bs-gutter-x", rem(0.75)),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 540,
  },
  container_fluid: {
    width: "100%",
    paddingRight: varCal("--bs-gutter-x", rem(0.75)),
    paddingLeft: varCal("--bs-gutter-x", rem(0.75)),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 540,
  },
  container_lg: {
    width: "100%",
    paddingRight: varCal("--bs-gutter-x", rem(0.75)),
    paddingLeft: varCal("--bs-gutter-x", rem(0.75)),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 540,
  },
  container_md: {
    width: "100%",
    paddingRight: varCal("--bs-gutter-x", rem(0.75)),
    paddingLeft: varCal("--bs-gutter-x", rem(0.75)),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 540,
  },
  container_sm: {
    width: "100%",
    paddingRight: varCal("--bs-gutter-x", rem(0.75)),
    paddingLeft: varCal("--bs-gutter-x", rem(0.75)),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 540,
  },
  container_xl: {
    width: "100%",
    paddingRight: varCal("--bs-gutter-x", rem(0.75)),
    paddingLeft: varCal("--bs-gutter-x", rem(0.75)),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 540,
  },
  container_xxl: {
    width: "100%",
    paddingRight: varCal("--bs-gutter-x", rem(0.75)),
    paddingLeft: varCal("--bs-gutter-x", rem(0.75)),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 540,
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row",
    // maxWidth: "100%",
    // marginTop: calc(varCal('--bs-gutter-y'), '*', '1'),
    // marginRight: calc(varCal('--bs-gutter-x'), '*', '-0.5'),
    // marginLeft: calc(varCal('--bs-gutter-x'), '*', '-0.5')
  },
  col: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "0%",
  },

  col_auto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "auto",
  },
  col_1: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "8.33333333%",
  },
  col_2: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "16.66666667%",
  },
  col_3: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "25%",
  },
  col_4: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "33.33333333%",
  },
  col_5: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "41.66666667%",
  },
  col_6: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "50%",
  },
  col_7: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "58.33333333%",
  },
  col_8: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "66.66666667%",
  },
  col_9: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "75%",
  },
  col_10: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "83.33333333%",
  },
  col_11: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "91.66666667%",
  },
  col_12: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    width: "100%",
  },
  offset_1: {
    marginLeft: "8.33333333%",
  },
  offset_2: {
    marginLeft: "16.66666667%",
  },
  offset_3: {
    marginLeft: "25%",
  },
  offset_4: {
    marginLeft: "33.33333333%",
  },
  offset_5: {
    marginLeft: "41.66666667%",
  },
  offset_6: {
    marginLeft: "50%",
  },
  offset_7: {
    marginLeft: "58.33333333%",
  },
  offset_8: {
    marginLeft: "66.66666667%",
  },
  offset_9: {
    marginLeft: "75%",
  },
  offset_10: {
    marginLeft: "83.33333333%",
  },
  offset_11: {
    marginLeft: "91.66666667%",
  },
  // Badge
  badge: {
    paddingTop: "0.35em",
    paddingRight: rem(0.65),
    paddingBottom: rem(0.35),
    paddingLeft: rem(0.65),
    fontSize: rem(0.75),
    fontWeight: "700",
    lineHeight: 1,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "bottom",
    borderTopLeftRadius: rem(0.25),
    borderTopRightRadius: rem(0.25),
    borderBottomRightRadius: rem(0.25),
    borderBottomLeftRadius: rem(0.25),
  },
  text_primary: {
    color: "#0d6efd",
  },
  text_secondary: {
    color: "#6c757d",
  },
  text_success: {
    color: "#198754",
  },
  text_info: {
    color: "#0dcaf0",
  },
  text_warning: {
    color: "#ffc107",
  },
  text_danger: {
    color: "#dc3545",
  },
  text_light: {
    color: "#f8f9fa",
  },
  text_dark: {
    color: "#212529",
  },
  text_white: {
    color: "#fff",
  },
  text_body: {
    color: "#212529",
  },
  text_muted: {
    color: "#6c757d",
  },
  text_black_50: {
    color: "rgba(0, 0, 0, 0.5)",
  },
  text_white_50: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  text_reset: {
    color: "inherit",
  },
  text_center: {
    textAlign: "center",
  },
  text_right: {
    textAlign: "right",
  },
  text_left: {
    textAlign: "left",
  },
  bg_primary: {
    backgroundColor: "#0d6efd",
  },
  bg_secondary: {
    backgroundColor: "#e9ecef",
  },
  bg_success: {
    backgroundColor: "#198754",
  },
  bg_info: {
    backgroundColor: "#0dcaf0",
  },
  bg_warning: {
    backgroundColor: "#ffc107",
  },
  bg_danger: {
    backgroundColor: "#dc3545",
  },
  bg_light: {
    backgroundColor: "#f8f9fa",
  },
  bg_dark: {
    backgroundColor: "#212529",
  },
  bg_body: {
    backgroundColor: "#fff",
  },
  bg_white: {
    backgroundColor: "#fff",
  },
  bg_transparent: {
    backgroundColor: "transparent",
  },
  bg_gray: {
    backgroundColor: "#f4f5f7",
  },
  bg_teal: {
    backgroundColor: varCal("-teal"),
  },
  text_secondary_size: {
    fontSize: rem(0.75),
  },
  card_header: {
    paddingTop: 20,
    paddingRight: rem(1.5),
    paddingBottom: rem(1.25),
    paddingLeft: rem(1.5),
    marginBottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderTopLeftRadius: rem(0.5),
    borderTopRightRadius: rem(0.5),
    // opacity: 1,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.125)",
    // borderRadius: 20
  },
  card_body: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    paddingTop: rem(1),
    paddingRight: rem(1),
    paddingBottom: rem(1),
    paddingLeft: rem(1),
  },
  card_img: {
    width: "100%",
    height: null,
    borderTopLeftRadius: calc("0.25rem", "-", "1"),
  },
  card_img_bottom: {
    width: "100%",
    borderTopLeftRadius: calc("0.25rem", "-", "1"),
  },
  card_img_top: {
    width: "100%",
    borderTopLeftRadius: calc("0.25rem", "-", "1"),
  },
  card_title: {
    marginBottom: rem(0.5),
  },
  card_subtitle: {
    marginTop: rem(-0.25),
    marginBottom: 0,
  },
  card_text: {
    marginBottom: 0,
  },
  // Form
  form_control: {
    width: "100%",
    paddingTop: rem(0.375),
    paddingRight: rem(0.75),
    paddingBottom: rem(0.375),
    paddingLeft: rem(0.75),
    fontSize: rem(1),
    fontWeight: "400",
    height: 43,
    color: "#212529",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ced4da",
    borderStyle: "solid",
    borderTopLeftRadius: rem(0.25),
    borderTopRightRadius: rem(0.25),
    borderBottomRightRadius: rem(0.25),
    borderBottomLeftRadius: rem(0.25),
  },
  form_label: {
    marginBottom: rem(0.5),
    fontWeight: "300",
  },
  col_form_label: {
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: rem(1),
    lineHeight: 1.5,
  },
  // margin and padding
  m_0: {
    margin: 0,
  },
  m_1: {
    margin: rem(0.25),
  },
  m_2: {
    margin: rem(0.5),
  },
  m_3: {
    margin: rem(1),
  },
  m_4: {
    margin: rem(1.5),
  },
  m_5: {
    margin: rem(3),
  },
  m_auto: {
    margin: "auto",
  },
  mx_0: {
    marginRight: 0,
    marginLeft: 0,
  },
  mx_1: {
    marginRight: rem(0.25),
    marginLeft: rem(0.25),
  },
  mx_2: {
    marginRight: rem(0.5),
    marginLeft: rem(0.5),
  },
  mx_3: {
    marginRight: rem(1),
    marginLeft: rem(1),
  },
  mx_4: {
    marginRight: rem(1.5),
    marginLeft: rem(1.5),
  },
  mx_5: {
    marginRight: rem(3),
    marginLeft: rem(3),
  },
  mx_auto: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  my_0: {
    marginTop: 0,
    marginBottom: 0,
  },
  my_1: {
    marginTop: rem(0.25),
    marginBottom: rem(0.25),
  },
  my_2: {
    marginTop: rem(0.5),
    marginBottom: rem(0.5),
  },
  my_3: {
    marginTop: rem(1),
    marginBottom: rem(1),
  },
  my_4: {
    marginTop: rem(1.5),
    marginBottom: rem(1.5),
  },
  my_5: {
    marginTop: rem(3),
    marginBottom: rem(3),
  },
  my_auto: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  mt_0: {
    marginTop: 0,
  },
  mt_1: {
    marginTop: rem(0.25),
  },
  mt_2: {
    marginTop: rem(0.5),
  },
  mt_3: {
    marginTop: rem(1),
  },
  mt_4: {
    marginTop: rem(1.5),
  },
  mt_5: {
    marginTop: rem(3),
  },
  mt_auto: {
    marginTop: "auto",
  },
  me_0: {
    marginRight: 0,
  },
  me_1: {
    marginRight: rem(0.25),
  },
  me_2: {
    marginRight: rem(0.5),
  },
  me_3: {
    marginRight: rem(1),
  },
  me_4: {
    marginRight: rem(1.5),
  },
  me_5: {
    marginRight: rem(3),
  },
  me_auto: {
    marginRight: "auto",
  },
  mb_0: {
    marginBottom: 0,
  },
  mb_1: {
    marginBottom: rem(0.25),
  },
  mb_2: {
    marginBottom: rem(0.5),
  },
  mb_3: {
    marginBottom: rem(1),
  },
  mb_4: {
    marginBottom: rem(1.5),
  },
  mb_5: {
    marginBottom: rem(3),
  },
  mb_auto: {
    marginBottom: "auto",
  },
  ms_0: {
    marginLeft: 0,
  },
  ms_1: {
    marginLeft: rem(0.25),
  },
  ms_2: {
    marginLeft: rem(0.5),
  },
  ms_3: {
    marginLeft: rem(1),
  },
  ms_4: {
    marginLeft: rem(1.5),
  },
  ms_5: {
    marginLeft: rem(3),
  },
  ms_auto: {
    marginLeft: "auto",
  },
  p_0: {
    padding: 0,
  },
  p_1: {
    padding: rem(0.25),
  },
  p_2: {
    padding: rem(0.5),
  },
  p_3: {
    padding: rem(1),
  },
  p_4: {
    padding: rem(1.5),
  },
  p_5: {
    padding: rem(3),
  },
  px_0: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  px_1: {
    paddingRight: rem(0.25),
    paddingLeft: rem(0.25),
  },
  px_2: {
    paddingRight: rem(0.5),
    paddingLeft: rem(0.5),
  },
  px_3: {
    paddingRight: rem(1),
    paddingLeft: rem(1),
  },
  px_4: {
    paddingRight: rem(1.5),
    paddingLeft: rem(1.5),
  },
  px_5: {
    paddingRight: rem(3),
    paddingLeft: rem(3),
  },
  py_0: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  py_1: {
    paddingTop: rem(0.25),
    paddingBottom: rem(0.25),
  },
  py_2: {
    paddingTop: rem(0.5),
    paddingBottom: rem(0.5),
  },
  py_3: {
    paddingTop: rem(1),
    paddingBottom: rem(1),
  },
  py_4: {
    paddingTop: rem(1.5),
    paddingBottom: rem(1.5),
  },
  py_5: {
    paddingTop: rem(3),
    paddingBottom: rem(3),
  },
  pt_0: {
    paddingTop: 0,
  },
  pt_1: {
    paddingTop: rem(0.25),
  },
  pt_2: {
    paddingTop: rem(0.5),
  },
  pt_3: {
    paddingTop: rem(1),
  },
  pt_4: {
    paddingTop: rem(1.5),
  },
  pt_5: {
    paddingTop: rem(3),
  },
  pe_0: {
    paddingRight: 0,
  },
  pe_1: {
    paddingRight: rem(0.25),
  },
  pe_2: {
    paddingRight: rem(0.5),
  },
  pe_3: {
    paddingRight: rem(1),
  },
  pe_4: {
    paddingRight: rem(1.5),
  },
  pe_5: {
    paddingRight: rem(3),
  },
  pb_0: {
    paddingBottom: 0,
  },
  pb_1: {
    paddingBottom: rem(0.25),
  },
  pb_2: {
    paddingBottom: rem(0.5),
  },
  pb_3: {
    paddingBottom: rem(1),
  },
  pb_4: {
    paddingBottom: rem(1.5),
  },
  pb_5: {
    paddingBottom: rem(3),
  },
  ps_0: {
    paddingLeft: 0,
  },
  ps_1: {
    paddingLeft: rem(0.25),
  },
  ps_2: {
    paddingLeft: rem(0.5),
  },
  ps_3: {
    paddingLeft: rem(1),
  },
  ps_4: {
    paddingLeft: rem(1.5),
  },
  ps_5: {
    paddingLeft: rem(3),
  },
  fs_1: {
    fontSize: calc("1.375rem", "+", "1.5vw"),
  },
  fs_2: {
    fontSize: calc("1.375rem", "+", "0.9vw"),
  },
  fs_3: {
    fontSize: calc("1.3rem", "+", "0.6vw"),
  },
  fs_4: {
    fontSize: calc("1.275rem", "+", "0.3vw"),
  },
  fs_5: {
    fontSize: rem(1.25),
  },
  fs_6: {
    fontSize: rem(1),
  },
  fw_bold: {
    fontWeight: "700",
  },
  fw_bolder: {
    fontWeight: "bolder",
  },
  flex_fill: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  border: {
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderStyle: "solid",
  },
  border_0: {
    borderWidth: 0,
  },
  border_top: {
    borderTopWidth: 1,
    borderTopColor: "#dee2e6",
  },
  border_top_0: {
    borderTopWidth: 0,
  },
  border_end: {
    borderRightWidth: 1,
    borderRightColor: "#dee2e6",
  },
  border_end_0: {
    borderRightWidth: 0,
  },
  border_bottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  border_bottom_0: {
    borderBottomWidth: 0,
  },
  border_start: {
    borderLeftWidth: 1,
    borderLeftColor: "#dee2e6",
  },
  border_start_0: {
    borderLeftWidth: 0,
  },
  border_primary: {
    borderColor: "#0d6efd",
  },
  border_secondary: {
    borderColor: "#6c757d",
  },
  border_success: {
    borderColor: "#198754",
  },
  border_info: {
    borderColor: "#0dcaf0",
  },
  border_warning: {
    borderColor: "#ffc107",
  },
  border_danger: {
    borderColor: "#dc3545",
  },
  border_light: {
    borderColor: "#f8f9fa",
  },
  border_dark: {
    borderColor: "#212529",
  },
  border_white: {
    borderColor: "#fff",
  },
  border_1: {
    borderWidth: 1,
  },
  border_2: {
    borderWidth: 2,
  },
  border_3: {
    borderWidth: 3,
  },
  border_4: {
    borderWidth: 4,
  },
  border_5: {
    borderWidth: 5,
  },
  w_25: {
    width: "25%",
  },
  w_50: {
    width: "50%",
  },
  w_75: {
    width: "75%",
  },
  w_100: {
    width: "100%",
  },
  w_auto: {
    width: "auto",
  },
  mw_100: {
    maxWidth: "100%",
  },
  vw_100: {
    width: "100vw",
  },
  min_vw_100: {
    minWidth: "100vw",
  },
  rw_100: {
    maxWidth: width,
  },
  h_25: {
    height: "25%",
  },
  h_50: {
    height: "50%",
  },
  h_75: {
    height: "75%",
  },
  h_100: {
    height: "100%",
  },
  h_auto: {
    height: "auto",
  },
  mh_100: {
    maxHeight: "100%",
  },
  vh_100: {
    height: "100vh",
  },
  min_vh_100: {
    minHeight: "100vh",
  },
  float_right: {
    cssFloat: "right",
  },
};
const runMedia = () => {
  // 576px
  if (width > root["-breakpointSm"]) {
    // container
    console.log("media working");
    style.container.maxWidth = 540;
    style.container_sm.maxWidth = 540;

    // Col
    style["col-sm"] = {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: "0%",
    };
    // Col-1
    appendToStyle(col_sm);
  }
  // 768px
  if (width > root["-breakpointMd"]) {
    console.log("width>768");
    // container
    style.container.maxWidth = 720;
    style.container_sm.maxWidth = 720;
    style.container_md.maxWidth = 720;

    // Col
    style["col-md"] = {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: "0%",
    };
    appendToStyle(col_md);
  }
  // 992px
  if (width > root["-breakpointLg"]) {
    console.log("width>992");
    // container
    style.container.maxWidth = 960;
    style.container_sm.maxWidth = 960;
    style.container_md.maxWidth = 960;
    style.container_lg.maxWidth = 960;

    // Col
    style["col-lg"] = {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: "0%",
    };
    appendToStyle(col_lg);
  }

  // 1200px
  if (width > root["-breakpointXl"]) {
    console.log("width>1200");
    // h1
    style.h1["fontSize"] = rem(2.5);
    style.h2["fontSize"] = rem(2);
    style.h3["fontSize"] = rem(1.75);
    style.h4["fontSize"] = rem(1.5);
    style.h5["fontSize"] = rem(1.25);

    // container
    style.container.maxWidth = 1140;
    style.container_sm.maxWidth = 1140;
    style.container_md.maxWidth = 1140;
    style.container_lg.maxWidth = 1140;
    style.container_xl.maxWidth = 1140;

    // Col
    style["col-xl"] = {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: "0%",
    };
    appendToStyle(col_xl);
  }
  // 1400px
  if (width > root["-breakpointXXl"]) {
    console.log("width>1400");
    // Container
    // const maxWidth = width;
    const maxWidth = 1320;
    style.container.maxWidth = maxWidth;
    style.container_sm.maxWidth = maxWidth;
    style.container_md.maxWidth = maxWidth;
    style.container_lg.maxWidth = maxWidth;
    style.container_xl.maxWidth = maxWidth;
    style.container_xxl.maxWidth = maxWidth;

    // Col
    style["col-xxl"] = {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: "0%",
    };
    appendToStyle(col_xxl);
  }
};
runMedia();
console.log("Width", width);

export default deepmerge(style, custom);
