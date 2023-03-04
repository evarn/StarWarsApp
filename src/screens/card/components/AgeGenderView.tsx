import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Fonts from '../../../constants/fonts';
import Colors from '../../../constants/colors';
import {getCheckFunction} from '../../../features/getCheckFunction';
import Strings from './../../../constants/strings';

interface IAgeGenderView {
  birth_year?: string | undefined;
  gender?: string | undefined;
}
const AgeGenderView = ({birth_year, gender}: IAgeGenderView) => {
  return (
    <View style={styles.mainContainer}>
      {getCheckFunction(birth_year) && (
        <View style={[styles.viewChar, {backgroundColor: Colors.BLUE_1}]}>
          <Text style={styles.textChar}>{birth_year} </Text>
        </View>
      )}

      {getCheckFunction(gender) && (
        <View
          style={[
            styles.viewChar,
            {
              backgroundColor:
                gender === Strings.INFO_MALE
                  ? Colors.GREEN_1
                  : gender === Strings.INFO_FEMALE
                  ? Colors.VIOLET_1
                  : Colors.YELLOW_1,
            },
          ]}>
          <Text style={styles.textChar}>{gender} </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewChar: {
    marginHorizontal: 4,
    padding: 8,
    borderRadius: 11,
  },
  textChar: {
    fontFamily: Fonts.SECONDARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: Colors.BLACK_2,
  },
});

export default AgeGenderView;
