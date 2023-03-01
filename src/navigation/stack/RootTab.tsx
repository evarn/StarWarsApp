import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../../constants/colors';
import {Screens} from '../../navigation/constants/screens';
import HomeScreens from '../../screens/home/HomeScreens';
import CardScreen from '../../screens/card/CardScreen';
import ErrorScreen404 from './../../screens/errors/ErrorScreen404';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.BLUE_3,
        tabBarInactiveBackgroundColor: Colors.WHITE_1,
        headerShown: false,
      }}>
      <Tab.Screen name={Screens.HOME} component={HomeScreens} />
      <Tab.Screen name={Screens.CARD} component={CardScreen} />
      <Tab.Screen name={Screens.ERROR_404} component={ErrorScreen404} />
    </Tab.Navigator>
  );
};

export default RootTab;
