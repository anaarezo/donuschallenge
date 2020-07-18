import { StyleSheet } from "react-native";
import { fonts, palette, pattern } from "../../../constants";

const styles = StyleSheet.create({
  scrProducts: {
    flex: 1,
    backgroundColor: palette.white,
  },
  wraploader: {
    paddingVertical: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapError: {
    paddingVertical: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapEmpty: {
    paddingVertical: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    paddingBottom: 30,
    color: palette.light,
    fontSize: fonts.xlg,
    textAlign: "center",
  },
  imgEmpty: {
    width: 200,
    height: 200,
  },
});

export default styles;
