import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
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
  const {name, mass, height, birth_year, gender} = item;

  const getCheckColor = (check: string) => {
    if (check === 'none') {
      return;
    }
    if (check === 'unknown') {
      return;
    }
    if (check === 'n/a') {
      return;
    }
    return true;
  };

  return (
    <TouchableOpacity style={[styles.mainContainer, {width: widthSIZE}]}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.circleContainer}>
        {height !== 'unknown' && (
          <CircleCharacter title={'height'} param={height} />
        )}
        {mass !== 'unknown' && <CircleCharacter title={'mass'} param={mass} />}
      </View>
      <View style={styles.viewCharcontainer}>
        {getCheckColor(birth_year) && (
          <View style={[styles.viewChar, {backgroundColor: Colors.BLUE_1}]}>
            <Text style={styles.textChar}>{birth_year} </Text>
          </View>
        )}

        {getCheckColor(gender) && (
          <View
            style={[
              styles.viewChar,
              {
                backgroundColor:
                  gender === 'male'
                    ? Colors.GREEN_1
                    : gender === 'female'
                    ? Colors.VIOLET_1
                    : Colors.YELLOW_1,
              },
            ]}>
            <Text style={styles.textChar}>{gender} </Text>
          </View>
        )}
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
    margin: 10,
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
  viewCharcontainer: {
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

export default CardCharacter;
