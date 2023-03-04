import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../../../constants/colors';
import {getCheckFunction} from '../../../../features/getCheckFunction';
import Strings from './../../../../constants/strings';
import Fonts from './../../../../constants/fonts';

interface IInfoTitlePropsCharacter {
  hair_color: string | undefined;
  skin_color: string | undefined;
}

const InfoCharcterTitleProps = ({
  hair_color,
  skin_color,
}: IInfoTitlePropsCharacter) => {
  return (
    <View style={styles.containerProps}>
      {getCheckFunction(hair_color) && (
        <Text style={styles.text}>
          <Text>{Strings.INFO_PROPS_HAIR_COLOR}</Text>
          <Text>{hair_color}</Text>
        </Text>
      )}
      {getCheckFunction(skin_color) && (
        <Text style={styles.text}>
          <Text>{Strings.INFO_PROPS_SKIN_COLOR}</Text>
          <Text>{skin_color}</Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerProps: {
    backgroundColor: Colors.WHITE_2,
    margin: 8,
    borderRadius: 8,
    padding: 8,
    width: '100%',
  },
  text: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.BLACK_1,
  },
});

export default InfoCharcterTitleProps;
