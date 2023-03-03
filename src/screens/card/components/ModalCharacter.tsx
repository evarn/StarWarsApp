import React, {Dispatch, useState} from 'react';
import {useAppSelector} from '../../../redux/hooks';
import selectCharcterData from '../../../redux/store/characterSelector';
import {
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  Modal,
  Alert,
  Pressable,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../../constants/colors';
import Fonts from './../../../constants/fonts';
import Circle from './Circle';
import CircleCharacter from './Circle';
import IconFemaleSVG from '../../../../assets/icons/IconFemale.svg';
import IconMaleSVG from '../../../../assets/icons/IconMale.svg';
import UFOSVG from '../../../../assets/icons/UFO.svg';
interface IModalCharacter {
  modalVisible?: boolean | undefined;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
}

const ModalCharacter = ({modalVisible, setModalVisible}: IModalCharacter) => {
  const {selectedPeople} = useAppSelector(selectCharcterData);

  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <View>
                <Text>{selectedPeople?.name}</Text>
              </View>
              <View>
                {selectedPeople?.gender === 'male' ? (
                  <IconMaleSVG height={200} fill={'transparent'} />
                ) : selectedPeople?.gender === 'female' ? (
                  <IconFemaleSVG height={200} />
                ) : (
                  <UFOSVG height={200} />
                )}
              </View>

              <View>
                <Text>
                  <Text>{'hair color '}</Text>
                  <Text>{selectedPeople?.hair_color}</Text>
                </Text>

                <Text>
                  <Text>{'skin color '}</Text>
                  <Text>{selectedPeople?.skin_color}</Text>
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <CircleCharacter
                  title={'height'}
                  param={selectedPeople?.height}
                />
                <CircleCharacter title={'mass'} param={selectedPeople?.mass} />
              </View>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>Hide Modal</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SHADOW_MODAL,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '50%',
    width: '80%',
  },
});

export default ModalCharacter;
