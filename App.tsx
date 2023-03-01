import React from 'react';
import Navigation from './src/navigation/index';
import {StatusBar} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
