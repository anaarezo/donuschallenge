import * as Location from "expo-location";

const handleNavigation = (props, location) => async () => {
  try {
    Location.requestPermissionsAsync();
    const result = await Location.geocodeAsync(location);
    props.navigation.navigate("Products", { location, result });
  } catch (e) {
    console.log("error: ", e);
  }
};

export default handleNavigation;
