import React, {Dispatch} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Fonts from '../../../constants/fonts';
import Colors from '../../../constants/colors';
import CircleCharacter from './Circle';
import {setSelectedPeople} from '../../../redux/store/characterSlice';
import {useAppDispatch} from '../../../redux/hooks';
import AgeGenderView from './AgeGenderView';
import Strings from './../../../constants/strings';
interface ICharacter {
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
}
interface ICardCharacter {
  item: ICharacter;
  widthSIZE?: string | number | undefined;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
}
const CardCharacter = ({item, widthSIZE, setModalVisible}: ICardCharacter) => {
  const dispatch = useAppDispatch();
  const {name, mass, height, birth_year, gender} = item;

  const onPressCard = (items: ICharacter) => {
    dispatch(setSelectedPeople(items));
    setModalVisible(true);
  };

  return (
    <TouchableOpacity
      style={[styles.mainContainer, {width: widthSIZE}]}
      onPress={() => onPressCard(item)}>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.circleContainer}>
        <CircleCharacter title={Strings.INFO_HEIGHT} param={height} />
        <CircleCharacter title={Strings.INFO_MASS} param={mass} />
      </View>
      <AgeGenderView birth_year={birth_year} gender={gender} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
    textAlignVertical: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
  },
});

export default CardCharacter;
