import React from 'react';
import {StyleSheet, View, Text, StyleProp, ViewStyle} from 'react-native';

import Colors from '../../../constants/colors';
import Fonts from './../../../constants/fonts';

interface ICardCharacter {
  title: string;
  style?: StyleProp<ViewStyle>;
  param: string | undefined;
}

const CircleCharacter = ({title, style, param}: ICardCharacter) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.circle, style]}>
        <Text style={styles.circleText}>{param}</Text>
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    marginVertical: 12,
  },
  circle: {
    borderColor: Colors.BLACK_1,
    height: 54,
    width: 54,
    borderRadius: 27,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    color: Colors.BLACK_2,
  },
  titleText: {
    marginTop: 4,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.GRAY_1,
    textAlign: 'center',
  },
});

export default CircleCharacter;
