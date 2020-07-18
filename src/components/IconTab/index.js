import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { fonts, palette } from "../../constants";

const IconBottomTab = (props) => {
  return (
    <Icon
      name={props.name}
      size={fonts.xxlg}
      color={props.focused ? palette.secondary : palette.darker}
    />
  );
};

export default IconBottomTab;
