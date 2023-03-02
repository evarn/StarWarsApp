import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../constants/screens';
import {IRouteParamList} from '../types';
import RootTab from './RootTab';

const MainStack = createNativeStackNavigator<IRouteParamList>();

const RootNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={Screens.TAB}
        component={RootTab}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
export default RootNavigator;
