import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import {Screens} from '@app/navigation/constants/screens';

export type IRouteParamList = {
  [Screens.HOME]: undefined;
  [Screens.TAB]: undefined;
  [Screens.CARD]: undefined;
  [Screens.ERROR_404]: undefined;
};

export type NavigationType = NativeStackNavigationProp<IRouteParamList>;

export type RootRouteProps<RouteName extends keyof IRouteParamList> = RouteProp<
  IRouteParamList,
  RouteName
>;
