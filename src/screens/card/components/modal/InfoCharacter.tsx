import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colors from '../../../../constants/colors';
import CircleCharacter from '../Circle';
import {getCheckFunction} from '../../../../features/getCheckFunction';
import Strings from './../../../../constants/strings';
import InfoCharcterTitleProps from './InfoCharcterTitleProps';

interface IInfoCharacter {
  hair_color: string | undefined;
  skin_color: string | undefined;
  height: string | undefined;
  mass: string | undefined;
}

const InfoCharacter = ({
  hair_color,
  skin_color,
  height,
  mass,
}: IInfoCharacter) => {
  return (
    <View style={styles.infoContainer}>
      <InfoCharcterTitleProps hair_color={hair_color} skin_color={skin_color} />
      <View style={styles.containerCircles}>
        {getCheckFunction(height) && (
          <View style={styles.containerCircle}>
            <CircleCharacter title={Strings.INFO_HEIGHT} param={height} />
          </View>
        )}
        {getCheckFunction(mass) && (
          <View style={styles.containerCircle}>
            <CircleCharacter title={Strings.INFO_MASS} param={mass} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.BLUE_2,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'space-around',
  },
  containerCircle: {
    backgroundColor: Colors.WHITE_2,
    borderRadius: 8,
    marginHorizontal: 12,
  },
  containerCircles: {
    flexDirection: 'row',
  },
  containerProps: {
    backgroundColor: Colors.WHITE_2,
    margin: 8,
    borderRadius: 8,
    padding: 8,
    width: '100%',
  },
});

export default InfoCharacter;
