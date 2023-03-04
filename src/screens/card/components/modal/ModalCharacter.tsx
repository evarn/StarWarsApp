import React, {Dispatch} from 'react';
import {useAppSelector} from '../../../../redux/hooks';
import selectCharcterData from '../../../../redux/store/characterSelector';
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../../../constants/colors';
import LogoCharacter from './LogoCharacter';
import InfoCharacter from './InfoCharacter';
import IconCloseSVG from '../../../../../assets/icons/closeIcon.svg';
interface IModalCharacter {
  modalVisible?: boolean | undefined;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
}

const ModalCharacter = ({modalVisible, setModalVisible}: IModalCharacter) => {
  const {selectedPeople} = useAppSelector(selectCharcterData);

  return (
    <View style={styles.mainContainer}>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}>
          <View style={styles.svgContainer}>
            <IconCloseSVG
              style={styles.svg}
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>

          <TouchableWithoutFeedback>
            <>
              <View style={styles.modalView}>
                <LogoCharacter
                  name={selectedPeople?.name}
                  birth_year={selectedPeople?.birth_year}
                  gender={selectedPeople?.gender}
                />
                <InfoCharacter
                  hair_color={selectedPeople?.hair_color}
                  skin_color={selectedPeople?.skin_color}
                  height={selectedPeople?.height}
                  mass={selectedPeople?.mass}
                />
              </View>
            </>
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
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '60%',
    width: '80%',
  },
  svgContainer: {
    width: '80%',
    marginBottom: 8,
  },
  svg: {
    alignSelf: 'flex-end',
  },
});

export default ModalCharacter;
