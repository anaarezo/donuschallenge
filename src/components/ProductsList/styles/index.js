import { StyleSheet } from "react-native";
import { fonts, palette, pattern } from "../../../constants";

const styles = StyleSheet.create({
  wrapProducts: {
    backgroundColor: palette.lighter,
  },
  blockSearch: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: palette.primary,
  },
  inpFieldSearch: {
    flex: 1,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    height: 45,
    shadowColor: palette.regular,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
    backgroundColor: palette.white,
    color: palette.regular,
    textAlign: "center",
    textTransform: "capitalize",
  },
  touSearch: {
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 12,
    height: 45,
    shadowColor: palette.regular,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
    backgroundColor: palette.white,
    textAlign: "center",
    textTransform: "capitalize",
  },
  wrapLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blockCategory: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: pattern.padding,
    backgroundColor: palette.lightest,
  },
  blockProducts: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    padding: 16,
    backgroundColor: palette.lightest,
  },
});

export default styles;
