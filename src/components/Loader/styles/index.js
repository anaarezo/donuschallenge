import { StyleSheet } from "react-native";
import { pattern, palette } from "../../../constants";

const styles = StyleSheet.create({
  wrapLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 150,
    paddingHorizontal: pattern.padding,
    backgroundColor: palette.white,
  },
});

export default styles;
