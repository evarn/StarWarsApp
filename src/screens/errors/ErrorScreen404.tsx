import React from 'react';
import {StyleSheet, View} from 'react-native';

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
      <View style={styles.svgConatiner}>
        <DeathStar_SVG style={styles.svg_DeathStar} />
        <ERROR404_SVG style={styles.svg_404} />
      </View>

      <AppButton
        title={Strings.ERROR_404_BUTTON_TITLE}
        onPressButton={onPressReturn}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  svgConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ErrorScreen404;
