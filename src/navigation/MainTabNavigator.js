import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "../components/IconTab";
import Home from "../screens/HomeScreen";
import Products from "../screens/ProductsScreen";
import { palette } from "../constants";

const settings = Platform.select({
  default: { headerMode: "none" },
});

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  settings
);

HomeStack.navigationOptions = {
  tabBarLabel: "Início",
  tabBarIcon: ({ focused }) => (
    <Icon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home` : "md-home"}
    />
  ),
  tabBarOptions: {
    activeTintColor: palette.secondary,
    inactiveTintColor: palette.regular,
  },
};

HomeStack.path = "home";

const ProductsStack = createStackNavigator(
  {
    Products: Products,
  },
  settings
);

ProductsStack.navigationOptions = {
  tabBarLabel: "Produtos",
  tabBarIcon: ({ focused }) => (
    <Icon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-beer" : "md-beer"}
    />
  ),
  tabBarOptions: {
    activeTintColor: palette.secondary,
    inactiveTintColor: palette.regular,
  },
};

ProductsStack.path = "products";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProductsStack,
});

tabNavigator.path = "";

export default tabNavigator;
