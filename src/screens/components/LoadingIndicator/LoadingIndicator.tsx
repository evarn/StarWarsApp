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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoadingIndicator;
