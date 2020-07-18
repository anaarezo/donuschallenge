import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ListItem = ({ item }) => {
  return (
    <View style={styles.listItem} key={item.id} testID="listItem">
      <Image
        style={styles.imgProduct}
        source={{ uri: item.images[0].url }}
        defaultSource={require("../../assets/no-photo.png")}
        testID="imgProduct"
      />
      <View style={styles.wrapListItem}>
        <Text style={styles.titProduct} testID="titProduct">
          {item.title}
        </Text>
        <Text style={styles.priceProduct} testID="priceProduct">
          R${" "}
          {(Math.round(item.productVariants[0].price * 100) / 100).toFixed(2)}
        </Text>
        <TouchableOpacity
          style={styles.touAddToCard}
          activeOpacity={0.9}
          onPress={() =>
            console.warn(
              "O produto: ",
              item.title,
              "foi adicionado ao carrinho"
            )
          }
          testID="touAddToCard"
        >
          <Text style={styles.touLabel}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;
