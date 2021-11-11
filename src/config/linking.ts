const navConfig = {
  prefixes: ["rne://127.0.0.1:19000/--/"],
  config: {
    screens: {
      AuthStack: {
        path: "/auth",
        initialRouteName: "/auth",
        screens: {
          LoginScreen: "/login",
          RegisterScreen: "/register",
        },
      },
      InformationStack: {
        path: "/info",
        initialRouteName: "/info",
        screens: {
          StoreSetup: "/store-setup",
        },
      },
      MainStack: {
        path: "/main",
        initialRouteName: "/main",
        screens: {
          Dashboard: "/dashboard",
          InventoryScreen: "/inventory",
          OrderHistory: "/orders",
          ChatScreen: "/chat",
          AccountScreen: "/account",
          SettingScreen: "/settings",
          PersonalInfo: "/personal-info",
          CustomPage: "/custom-page",
        },
      },
    },
  },
};

export default navConfig;
