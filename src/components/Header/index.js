import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => (
  <View style={styles.container} testID="Header">
    <Text style={styles.title}>Your <Text style={styles.span}>Delivery</Text></Text>
  </View>
);

export default Header;