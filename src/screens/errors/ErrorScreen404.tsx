import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../constants/colors';
import DeathStar_SVG from '../../../assets/icons/teamRocket.svg';
import ERROR404_SVG from '../../../assets/icons/404.svg';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../navigation/types';
import Strings from './../../constants/strings';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppButton from '../components/appButton/AppButton';

const ErrorScreen404 = () => {
  const navigation = useNavigation<NavigationType>();
  const onPressReturn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <DeathStar_SVG style={styles.svg_DeathStar} />
      <ERROR404_SVG style={styles.svg_404} />
      <AppButton
        title={Strings.ERROR_404_BUTTON_TITLE}
        onPressButton={onPressReturn}
        styleView={styles.btn}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_2,
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
  svg_DeathStar: {
    position: 'absolute',
    maxHeight: '30%',
    maxWidth: '50%',
    zIndex: 5,
  },
  svg_404: {
    position: 'absolute',
    maxHeight: '30%',
    maxWidth: '50%',
  },
  btn: {
    position: 'absolute',
    bottom: 35,
  },
});

export default ErrorScreen404;
