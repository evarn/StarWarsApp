import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>{'Main'}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
