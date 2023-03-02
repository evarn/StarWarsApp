import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Fonts from '../../../constants/fonts';
import Colors from '../../../constants/colors';
import CircleCharacter from './Circle';

interface ICardCharacter {
  item: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  };
  widthSIZE?: string | number | undefined;
}
const CardCharacter = ({item, widthSIZE}: ICardCharacter) => {
  const {name, mass, height} = item;

  return (
    <TouchableOpacity
      style={[styles.mainContainer, {margin: 10, width: widthSIZE}]}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.circleContainer}>
        {height !== 'unknown' && (
          <CircleCharacter title={'height'} param={height} />
        )}
        {mass !== 'unknown' && <CircleCharacter title={'mass'} param={mass} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY_2,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  name: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: Colors.BLACK_2,
    textAlign: 'center',

    height: 46,
  },
  circleContainer: {
    flexDirection: 'row',
  },
});

export default CardCharacter;
