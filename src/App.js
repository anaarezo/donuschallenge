import { AppLoading } from "expo";
import React, { useState } from "react";
import { Platform, View, StatusBar } from "react-native";
import { Asset } from 'expo-asset';
import Header from "./components/Header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import AppNavigator from "./navigation/AppNavigator";


const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={handleExpoLoading}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <ApolloProvider client={api}>
        <View style={{ flex: 1 }}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Header />
          <AppNavigator />
        </View>
      </ApolloProvider>
    );
  }
};

export default App;

const api = new ApolloClient({
  uri: "https://api.code-challenge.ze.delivery/public/graphql",
});

const handleLoadingError = (error) => {
  console.warn(error);
};

const handleFinishLoading = (setLoadingComplete) => {
  setLoadingComplete(true);
};

const handleExpoLoading = async () => {
  const images = [require('./assets/logo-your-delivery.png')];
  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  }); 
  return Promise.all(cacheImages);
};