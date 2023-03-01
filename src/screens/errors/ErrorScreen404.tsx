import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../constants/colors';

const ErrorScreen404 = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>ErrorScreen404</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
});

export default ErrorScreen404;
