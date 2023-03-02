import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Strings from '../../../constants/strings';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

interface ITitleCardScreen {
  count: number;
}

const TitleCardScreen = ({count}: ITitleCardScreen) => {
  return (
    <Text style={styles.viewTitle}>
      <Text style={[styles.textTitle, styles.textTitleBold]}>{count}</Text>
      <Text style={[styles.textTitle, styles.textTitleBold]}>
        {Strings.CHARACTERS_TITLE_TEXT_1}
      </Text>
      <Text style={styles.textTitle}>{Strings.CHARACTERS_TITLE_TEXT_2}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  viewTitle: {
    marginTop: 8,
    textAlign: 'center',
  },
  textTitle: {
    color: Colors.BLACK_1,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 30,
    letterSpacing: 3,
  },
  textTitleBold: {
    fontWeight: '700',
  },
});

export default TitleCardScreen;
