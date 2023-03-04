import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Strings from './../../constants/strings';
import Colors from '../../constants/colors';
import BannerSVG from '../../../assets/icons/banner.svg';
import Fonts from './../../constants/fonts';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../navigation/types';
import {Screens} from '../../navigation/constants/screens';
import TitlleText from './components/TitlleText';
import AppButton from '../components/appButton/AppButton';

const HomeScreens = () => {
  const navigation = useNavigation<NavigationType>();
  const onPressGoCharacter = () => {
    navigation.navigate(Screens.CARD);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        <TitlleText />
        <BannerSVG style={styles.svg} />
        <Text style={styles.textSubTitle}>{Strings.HOME_SUBTITLE_TEXT}</Text>
        <AppButton
          title={Strings.HOME_BUTTON_TITLE}
          onPressButton={onPressGoCharacter}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.BLUE_2,
    maxHeight: '100%',
    maxWidth: '100%',
  },
  scrollView: {
    flex: 1,
    maxWidth: '100%',
  },
  contentContainerStyle: {
    justifyContent: 'space-around',
  },
  svg: {
    maxHeight: '60%',
    alignSelf: 'center',
  },
  textSubTitle: {
    color: Colors.WHITE_1,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: '80%',
    alignSelf: 'center',
  },
});

export default HomeScreens;
