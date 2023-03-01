import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '@app/constants/colors';

const HomeScreens = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>HomeScreens</Text>
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

export default HomeScreens;
