import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import {Screens} from '../../navigation/constants/screens';
import HomeScreens from '../../screens/home/HomeScreens';
import CardScreen from '../../screens/card/CardScreen';
import ErrorScreen404 from './../../screens/errors/ErrorScreen404';
import LogoSVG from '../../../assets/icons/StarWarsLogo.svg';
import Strings from './../../constants/strings';
import HomeSVG from '../../../assets/icons/empire.svg';
import CharcterSVG from '../../../assets/icons/mando.svg';
const Tab = createBottomTabNavigator();

const HomeTabBarIcon = () => {
  return <HomeSVG height={30} width={30} fill={Colors.YELLOW_1} />;
};
const CharacterTabBarIcon = () => {
  return <CharcterSVG height={30} width={30} fill={Colors.YELLOW_1} />;
};

const RootTab = () => {
  const _headerRight = () => {
    return <LogoSVG height={50} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.BLUE_2,
        tabBarInactiveBackgroundColor: Colors.BLUE_3,
        headerShown: true,
      }}>
      <Tab.Screen
        name={Screens.HOME}
        component={HomeScreens}
        options={{
          title: '',
          tabBarLabel: Strings.HEADER_TITLE_HOME,
          headerStyle: {
            backgroundColor: Colors.BLUE_3,
          },
          headerRight: _headerRight,
          tabBarIcon: HomeTabBarIcon,
          tabBarLabelStyle: {
            color: Colors.YELLOW_1,
          },
        }}
      />
      <Tab.Screen
        name={Screens.CARD}
        component={CardScreen}
        options={{
          title: '',
          tabBarLabel: Strings.HEADER_TITLE_CHARACTERS,
          headerStyle: {
            backgroundColor: Colors.BLUE_3,
          },
          tabBarIcon: CharacterTabBarIcon,
          tabBarLabelStyle: {
            color: Colors.YELLOW_1,
          },
          headerRight: _headerRight,
        }}
      />
      <Tab.Screen
        name={Screens.ERROR_404}
        component={ErrorScreen404}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default RootTab;
