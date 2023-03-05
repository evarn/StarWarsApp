import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import Colors from '../../../constants/colors';

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.YELLOW_1} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoadingIndicator;
