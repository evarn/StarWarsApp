import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './stack/RootStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
