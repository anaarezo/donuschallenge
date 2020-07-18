import { StyleSheet } from "react-native";
import { fonts, pattern, palette } from "../../../constants";

const styles = StyleSheet.create({
  listItem: {
    position: "relative",
    flexDirection: "row",
    padding: pattern.padding,
    marginVertical: 5,
    shadowColor: palette.regular,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
    width: "100%",
    height: 120,
    backgroundColor: palette.white,
  },
  imgProduct: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 80,
    width: 80,
    backgroundColor: palette.lightest,
  },
  wrapListItem: {
    flexBasis: 210,
  },
  titProduct: {
    marginHorizontal: pattern.padding,
    maxWidth: 200,
    fontWeight: "bold",
    textAlign: "left",
  },
  priceProduct: {
    marginHorizontal: pattern.padding,
    maxWidth: 200,
    color: palette.regular,
    fontSize: fonts.lg,
    fontWeight: "bold",
    textAlign: "left",
  },
  touAddToCard: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: palette.success,
  },
  touLabel: {
    color: palette.white,
  },
});

export default styles;
