import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Strings from '../../../constants/strings';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

const TitlleText = () => {
  return (
    <Text style={styles.viewTitle}>
      <Text style={[styles.textTitle, styles.textTitleBold]}>
        {Strings.HOME_TITLE_TEXT_1}
      </Text>
      <Text style={styles.textTitle}>{Strings.HOME_TITLE_TEXT_2}</Text>
      <Text style={[styles.textTitle, styles.textTitleBold]}>
        {Strings.HOME_TITLE_TEXT_3}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  viewTitle: {
    marginTop: 16,
  },
  textTitle: {
    color: Colors.WHITE_1,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 36,
    letterSpacing: 4,
  },
  textTitleBold: {
    fontWeight: '700',
  },
});

export default TitlleText;
