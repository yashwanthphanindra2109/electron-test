import {
  ImageStyle,
  Platform,
  StyleProp,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native";
interface customProps {
  [x: string]: StyleProp<ViewStyle | ImageStyle | TextStyle>;
}
const rem = (e: number) => e * 16;

const custom: customProps = {
  text_white: {
    color: "#fff",
  },
  box_shadow: {
    ...Platform.select({
      android: {
        elevation: 10,
        backgroundColor: "#FFF",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowRadius: 15,
        zIndex: 10,
        shadowOpacity: 0.1,
      },
    }),
  },
  card_shadow: {
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
  input_border_radius: {
    borderRadius: 6,
  },
  btn_border: {
    borderTopLeftRadius: rem(0.25),
    borderTopRightRadius: rem(0.25),
    borderBottomRightRadius: rem(0.25),
    borderBottomLeftRadius: rem(0.25),
  },
  nav_active: {
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  nav_sub_active: {
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  nav_text_active: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  nav_text_sub_active: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
};
export default custom;
