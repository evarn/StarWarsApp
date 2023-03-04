import React, {Dispatch} from 'react';
import {useAppSelector} from '../../../../redux/hooks';
import selectCharcterData from '../../../../redux/store/characterSelector';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../../../constants/colors';
import Fonts from '../../../../constants/fonts';
import CircleCharacter from '../Circle';
import IconFemaleSVG from '../../../../../assets/icons/IconFemale.svg';
import IconMaleSVG from '../../../../../assets/icons/IconMale.svg';
import UFOSVG from '../../../../../assets/icons/UFO.svg';
import {getCheckFunction} from '../../../../features/getCheckFunction';
import AgeGenderView from '../AgeGenderView';
import Strings from './../../../../constants/strings';
import {NumberProp} from 'react-native-svg';

interface ILogoCharacter {
  name: string | undefined;
  birth_year: string | undefined;
  gender: string | undefined;
  size?: NumberProp;
}

const LogoCharacter = ({
  name,
  gender,
  birth_year,
  size = 150,
}: ILogoCharacter) => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.iconContainer}>
        {gender === Strings.INFO_MALE ? (
          <IconMaleSVG height={size} fill={'transparent'} />
        ) : gender === Strings.INFO_FEMALE ? (
          <IconFemaleSVG height={size} />
        ) : (
          <UFOSVG height={size} />
        )}
      </View>
      <AgeGenderView birth_year={birth_year} gender={gender} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.BLUE_3,
    borderTopStartRadius: 16,
    borderTopRightRadius: 16,
  },

  nameContainer: {},
  nameText: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    color: Colors.WHITE_2,
    textAlign: 'center',
  },
  iconContainer: {
    marginVertical: 8,
  },
});

export default LogoCharacter;
