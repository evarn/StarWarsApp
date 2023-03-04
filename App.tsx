import React, {Component} from 'react';
import Navigation from './src/navigation/index';
import {StatusBar} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
export default class App extends Component {
  override componentDidMount() {
    SplashScreen.hide();
  }
  override render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar />
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
