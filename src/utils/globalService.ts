import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Global {
  static setAccessToken = async (access_token: string) => {
    try {
      await AsyncStorage.setItem("access_token", access_token);
    } catch (e) {
      console.log(e);
    }
  };

  static getAccessToken = async (): Promise<string> => {
    if (AsyncStorage.getItem("access_token")) {
      try {
        const value = await AsyncStorage.getItem("access_token");
        return value;
      } catch (error) {
        return "";
      }
    } else {
      return "";
    }
  };
  static setRefreshToken = async (refresh_token: string) => {
    try {
      await AsyncStorage.setItem("refresh_token", refresh_token);
    } catch (e) {
      console.log(e);
    }
  };

  static getRefreshToken = async (): Promise<string> => {
    if (AsyncStorage.getItem("refresh_token")) {
      try {
        const value = await AsyncStorage.getItem("refresh_token");
        return value;
      } catch (error) {
        return "";
      }
    } else {
      return "";
    }
  };
  static setEmail = async (email: string) => {
    console.log({ email });
    try {
      await AsyncStorage.setItem("email", email);
    } catch (e) {
      console.log(e);
    }
  };

  static getEmail = async (): Promise<string> => {
    if (AsyncStorage.getItem("email")) {
      try {
        const value = await AsyncStorage.getItem("email");
        return value;
      } catch (error) {
        return "";
      }
    } else {
      return "";
    }
  };
}
