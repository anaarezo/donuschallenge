import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const handleCategory = (id, refetch) => () => {
  refetch({ categoryId: id, search: "" });
};

const CategoriesList = ({ item, refetch }) => {
  return (
    <TouchableOpacity
      style={styles.touCategory}
      activeOpacity={0.9}
      key={item.id}
      onPress={handleCategory(item.id, refetch)}
      testID="touCategory"
    >
      <Text style={styles.lblTouchable}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesList;
