import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import handleNavigation from "./logic";
import styles from "./styles";

const Home = (props) => {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.scrHome} testID="scrHome">
      <View style={styles.imgWrap}>
        <Image
          style={styles.imgHome}
          source={require("../../assets/delivery-man.png")}
          testID="imgHome"
        />
      </View>
      <View style={styles.inpWrap}>
        <Text style={styles.titPage}>Encontre produtos perto de você!</Text>
        <TextInput
          style={styles.inpField}
          placeholder="Informe o endereço"
          value={location}
          onChangeText={(loc) => setLocation(loc)}
          testID="inpField"
        />
      </View>
      <View style={styles.touWrap}>
        <TouchableOpacity
          style={styles.touLocation}
          activeOpacity={0.9}
          onPress={handleNavigation(props, location)}
          testID="touLocation"
        >
          <Text style={styles.touText}>Quero encontrar!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
