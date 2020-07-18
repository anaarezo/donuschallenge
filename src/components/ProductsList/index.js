import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import GET_ALL_PRODUCTS from "./graphql";
import { Ionicons } from "@expo/vector-icons";
import Loader from "../Loader";
import CategoriesList from "../CategoriesList";
import ListItem from "../ListItem";
import styles from "./styles";

const ProductsList = ({ rowData }) => {
  const [searchProduct, setSearchProduct] = useState("");

  if (!rowData || !rowData.pocSearch[0] || !rowData.pocSearch[0].id) {
    return null;
  }

  const { refetch, loading, data, error } = useQuery(GET_ALL_PRODUCTS, {
    variables: { id: rowData.pocSearch[0].id, search: "", categoryId: null },
    fetchPolicy: "no-cache",
  });

  const handleFindProduct = (searchProduct) => () => {
    refetch({ categoryId: null, search: searchProduct });
  };
  
  if (loading) {
    return <Loader />;
  }

  if (!data || !data.poc || !data.poc.products) return null;

  if (error) {
    return (
      <View style={styles.wrapLoader}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapProducts}>
      <View style={styles.blockSearch}>
        <TextInput
          style={styles.inpFieldSearch}
          placeholder="Pesquise sua bebida favorita"
          value={searchProduct}
          onChangeText={(text) => setSearchProduct(text)}
          testID="inpFieldSearch"
        />
        <TouchableOpacity
          style={styles.touSearch}
          activeOpacity={0.9}
          title="Buscar"
          onPress={handleFindProduct(searchProduct)}
          testID="touSearch"
        >
          <Ionicons
            name={Platform.OS === "ios" ? `ios-search` : "md-search"}
            color={"black"}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.blockCategory}>
        {data.allCategory.map((item) => (
          <CategoriesList item={item} refetch={refetch} />
        ))}
      </View>
      <View style={styles.blockProducts}>
        {data.poc.products.map((item) => (
          <ListItem item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductsList;
