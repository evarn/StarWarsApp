import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Strings from './../../constants/strings';
import Colors from '../../constants/colors';
import BannerSVG from '../../../assets/icons/banner.svg';
import Fonts from './../../constants/fonts';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../navigation/types';
import {Screens} from '../../navigation/constants/screens';

const HomeScreens = () => {
  const navigation = useNavigation<NavigationType>();
  const onPressGoCharacter = () => {
    navigation.navigate(Screens.CARD);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>{Strings.HOME_TITLE_TEXT}</Text>

      <BannerSVG style={styles.svg} height={'60%'} />

      <Text style={styles.textSubTitle}>{Strings.HOME_SUBTITLE_TEXT}</Text>
      <TouchableOpacity style={styles.btn} onPress={onPressGoCharacter}>
        <Text style={styles.text_btn}>{Strings.HOME_BUTTON_TITLE}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: Colors.BLUE_2,
    padding: 20,
  },
  svg: {},
  textTitle: {
    color: Colors.WHITE_1,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 36,
    letterSpacing: 4,
  },
  textSubTitle: {
    color: Colors.WHITE_1,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  btn: {
    backgroundColor: Colors.YELLOW_1,
    borderRadius: 11,
    width: 231,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text_btn: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 23,
    color: Colors.BLACK_2,
  },
});

export default HomeScreens;
