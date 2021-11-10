import React, { Component } from "react";
import { Text, View } from "components";
import { rem } from "assets/style/bootstrap";
import { Icon } from "react-native-elements";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import RightIcon from "@expo/vector-icons/Fontisto";
import { storeTabs } from "config/navigator";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import { Easing } from "react-native-reanimated";
// import Animated from "react-native-reanimated";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Dashboard",
    icon: "dashboard",
    type: "material",
    navigation: storeTabs.dashboard,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Inventory",
    icon: "box",
    type: "feather",
    navigation: storeTabs.inventory,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-k1hkjlklsd",
    title: "Orders",
    icon: "receipt",
    type: "font-awesome-5",
    navigation: storeTabs.orders,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97fax",
    title: "Chat",
    icon: "chatbubble-ellipses",
    type: "ionicon",
    navigation: storeTabs.chat,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97ffd",
    title: "Account",
    icon: "md-person-circle-sharp",
    type: "ionicon",
    navigation: storeTabs.account,
    screens: {
      [storeTabs.account]: "Account Settings",
      [storeTabs.personal]: "Personal Settings",
      [storeTabs.custom]: "Custom Page",
    },
  },
];
interface SlideProps {
  navigation: any;
  t?: any;
  route?: any;

}
interface SlideState {
  rotateAnim: any;
  currentRoute: string;
  subRoute: string;


}
class SlideBar extends Component<SlideProps, SlideState> {
  constructor(props) {
    super(props);
    this.state = {
      rotateAnim: new Animated.Value(0),
      currentRoute: "Dashboard",
      subRoute: "",


    };
  }

  onNavigate(nav) {
    const { navigation } = this.props;
    this.setState({ currentRoute: nav });
    navigation.navigate(nav);
  }
  componentDidMount() {
    Animated.timing(this.state.rotateAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    const { route } = this.props;
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName) this.setState({ currentRoute: routeName });
  }
  subMenu(nav) {
    const { subRoute } = this.state;
    if (subRoute == nav) {
      this.setState({ subRoute: "" });
    } else {
      this.setState({ subRoute: nav });
    }
  }
  render() {
    const spin = this.state.rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"],
    });
    const { currentRoute, subRoute } = this.state;
    return (
      <View className="navbar navbar-hover">
        <View className="navbar_nav">
          <View className="logo">
            <View className="nav-header-link">
              <Text className="logo-text text-white">Yashwanth</Text>
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <RightIcon name="angle-dobule-right" size={20} color="#fff" />
              </Animated.View>
            </View>
          </View>
          {DATA.map((i) => {
            return (
              <View key={i.id}>
                {i.screens ? (
                  <TouchableOpacity onPress={() => this.subMenu(i.navigation)}>
                    <View className="nav-item p-2">
                      <View
                        className={
                          i.navigation == subRoute
                            ? "nav-link nav-sub-active"
                            : "nav-link"
                        }
                      >
                        <Icon
                          name={i.icon}
                          type={i.type}
                          style={styles.icon}
                          size={20}
                          color={
                            i.navigation == subRoute
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.5)"
                          }
                        />
                        <Text
                          className={
                            i.navigation == subRoute
                              ? "link-text nav_text_sub_active"
                              : "link-text"
                          }
                          style={styles.flex}
                        >
                          {i.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => this.onNavigate(i.navigation)}
                  >
                    <View className="nav-item p-2">
                      <View
                        className={
                          i.navigation == currentRoute
                            ? "nav-link nav-active"
                            : "nav-link"
                        }
                      >
                        <Icon
                          name={i.icon}
                          type={i.type}
                          style={styles.icon}
                          size={20}
                          color={
                            i.navigation == currentRoute
                              ? "#11cdef"
                              : "rgba(255,255,255,0.5)"
                          }
                        />
                        <Text
                          className={
                            i.navigation == currentRoute
                              ? "link-text nav-text-active"
                              : "link-text"
                          }
                          style={styles.flex}
                        >
                          {i.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}

                <View>
                  {i.navigation === subRoute &&
                    i.screens &&
                    Object.keys(i.screens).map((key, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => this.onNavigate(key)}
                          key={index}
                        >
                          <View
                            className={
                              key == currentRoute
                                ? "nav-link nav-active ps-4"
                                : "nav-link ps-4"
                            }
                          >
                            <Text
                              className={
                                key == currentRoute
                                  ? "sub-link-text nav-text-active"
                                  : "sub-link-text"
                              }
                              style={styles.flex}
                            >
                              {i.screens[key]}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex: { display: "flex" },
  icon: {
    minWidth: rem(2),
    marginLeft: rem(1.5),
    marginRight: rem(1.5),
    marginTop: 0,
    marginBottom: 0,
    opacity: 1,
  },
});
export default SlideBar;
