import { Platform } from "react-native";

export default {
  padding: 16,
  ...Platform.select({
    ios: {
      headerHeight: 65,
      headerPadding: 30,
    },
    android: {
      headerHeight: 65,
      headerPadding: 18,
    },
  }),
};
