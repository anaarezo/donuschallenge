import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ScrollView, View, Text, Image } from "react-native";
import ProductsList from "../../components/ProductsList";
import Loader from "../../components/Loader";
import FETCH_PRODUCTS from "./graphql";
import styles from "./styles";

let date = new Date();
const todayDate = date.toISOString();

const Products = (props) => {
  const {
    navigation: {
      state: { params },
    },
  } = props;

  if (
    !params ||
    !params.result[0] ||
    !params.result[0].latitude ||
    !params.result[0].longitude
  )
    return null;

  const { load, error, data } = useQuery(FETCH_PRODUCTS, {
    variables: {
      algorithm: "NEAREST",
      lat: params.result[0].latitude,
      long: params.result[0].longitude,
      now: todayDate,
    },
  });

  const emptyResponse = !data || !data.pocSearch[0];

  if (load)
    return (
      <View>
        <Loader />
      </View>
    );

  if (error)
    return (
      <View style={styles.wrapError}>
        <Text>{error.message}</Text>
      </View>
    );

  return (
    <ScrollView style={styles.scrProducts}>
      {emptyResponse ? (
        <View style={styles.wrapEmpty}>
          <Text style={styles.emptyText}>
            Infelizmente não encontramos nada próximo a este endereço!!!
          </Text>
          <Image
            style={styles.imgEmpty}
            source={require("../../assets/empty-search.png")}
            testID="imgHome"
          />
        </View>
      ) : (
        <ProductsList rowData={data} />
      )}
    </ScrollView>
  );
};

export default Products;
