import { StyleSheet } from "react-native";
import { fonts, palette, pattern } from "../../../constants";

const styles = StyleSheet.create({
  scrHome: {
    flex: 1,
    paddingVertical: 100,
    justifyContent: "center",
    backgroundColor: palette.primary,
  },
  imgWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgHome: {
    width: 200,
    height: 150,
  },
  inpWrap: {
    paddingTop: pattern.padding,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  titPage: {
    marginBottom: pattern.padding,
    color: palette.darker,
    fontSize: fonts.xlg,
    fontWeight: "bold",
    textAlign: "center",
  },
  inpField: {
    padding: 8,
    borderRadius: 30,
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
  touWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  touLocation: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 45,
    borderWidth: 1,
    borderColor: palette.regular,
    backgroundColor: palette.black,
    shadowColor: palette.regular,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
  },
  touText: {
    color: palette.white,
    fontSize: fonts.lg,
    fontWeight: "bold",
  },
});

export default styles;
