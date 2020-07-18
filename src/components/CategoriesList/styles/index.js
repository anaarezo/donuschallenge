import { StyleSheet } from "react-native";
import { fonts, palette } from "../../../constants";

const styles = StyleSheet.create({
  touCategory: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexBasis: "30%",
    marginVertical: 5,
    marginHorizontal: "1.5%",
    height: 45,
    borderRadius: 30,
    shadowColor: palette.regular,
    borderWidth: 1,
    borderColor: palette.lighter,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
    backgroundColor: palette.primary,
  },
  lblTouchable: {
    color: palette.dark,
    fontSize: fonts.sm,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
