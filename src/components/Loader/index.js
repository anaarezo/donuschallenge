import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const Loader = () => (
  <View style={styles.wrapLoader}>
    <Image
      style={styles.imgLoader}
      source={require("../../assets/loading.gif")}
      testID="imgLoader"
    />
  </View>
);

export default Loader;
