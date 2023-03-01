import React from 'react';
import Navigation from './src/navigation/index';
import {StatusBar} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
