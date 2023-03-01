import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../constants/colors';
import DeathStar_SVG from '../../../assets/icons/teamRocket.svg';
import ERROR404_SVG from '../../../assets/icons/404.svg';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../navigation/types';
import Strings from './../../constants/strings';
import Fonts from './../../constants/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';

const ErrorScreen404 = () => {
  const navigation = useNavigation<NavigationType>();
  const onPressReturn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <DeathStar_SVG style={styles.svg_DeathStar} />
      <ERROR404_SVG style={styles.svg_404} />

      <TouchableOpacity style={styles.btn} onPress={onPressReturn}>
        <Text style={styles.text_btn}>{Strings.ERROR_404_BUTTON_TITLE}</Text>
      </TouchableOpacity>
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
    backgroundColor: Colors.GREEN_1,
    borderRadius: 11,
    width: 231,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    position: 'absolute',
    bottom: 35,
  },
  text_btn: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 23,
  },
});

export default ErrorScreen404;
