import React, {Dispatch, useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../../../redux/hooks';
import selectCharcterData from '../../../../redux/store/characterSelector';
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  setPeople,
  setIsLoading,
  setCount,
  setNext,
  setMoreIsLoading,
  setSelectedPeople,
  setIsFiltred,
  setFilterPeople,
} from '../../../../redux/store/characterSlice';
import Colors from '../../../../constants/colors';
import LogoCharacter from './LogoCharacter';
import InfoCharacter from './InfoCharacter';
import IconCloseSVG from '../../../../../assets/icons/closeIcon.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import Strings from '../../../../constants/strings';
import AppButton from '../../../../screens/components/appButton/AppButton';
import {getLabelFromData} from '../../../../features/getLabelFromData';
interface IModalCharacter {
  modalVisible?: boolean | undefined;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
  isReset?: boolean | undefined;
  setIsReset: Dispatch<React.SetStateAction<boolean>>;
}

const ModalFilter = ({
  modalVisible,
  setModalVisible,
  isReset,
  setIsReset,
}: IModalCharacter) => {
  const {
    isLoading,
    count,
    next,
    moreIsLoading,
    people,
    filterPeople,
    isFiltred,
  } = useAppSelector(selectCharcterData);
  const dispatch = useAppDispatch();
  const [openHair, setOpenHair] = useState(false);
  const [valueHair, setValueHair] = useState(null);
  const [itemsHair, setItemsHair] = useState([
    {label: 'blond', value: 'blond'},
  ]);
  const [openSkin, setOpenSkin] = useState(false);
  const [valueSkin, setValueSkin] = useState(null);
  const [itemsSkin, setItemsSkin] = useState([
    {label: 'blond', value: 'blond'},
  ]);

  useEffect(() => {
    if (!people.length) {
      return;
    }
    const hair_color = getLabelFromData({
      people: people,
      atribute: 'hair_color',
    });
    const skin_color = getLabelFromData({
      people: people,
      atribute: 'skin_color',
    });

    setItemsHair(hair_color);
    setItemsSkin(skin_color);
    console.log(skin_color);
    console.log(hair_color);
  }, [people]);

  useEffect(() => {
    if (isReset) {
      setValueHair(null);
      setOpenHair(false);
      setValueSkin(null);
      setOpenHair(false);
      dispatch(setFilterPeople([]));
      dispatch(setIsFiltred(false));
    }
  }, [dispatch, isReset]);

  const onFiltred = () => {
    console.log('valueHair', valueHair);
    console.log('valueSkin', valueSkin);
    setIsReset(false);
    setModalVisible(false);
    let list = [];
    if (valueHair !== null) {
      if (valueHair === 'all') {
        dispatch(setFilterPeople([]));
        dispatch(setIsFiltred(false));
        return;
      }
      list = people.filter(item => {
        return item.hair_color === valueHair;
      });
    }

    console.log('valueHair', list);

    if (valueSkin !== null) {
      if (valueSkin === 'all') {
        dispatch(setFilterPeople([]));
        dispatch(setIsFiltred(false));
        return;
      }

      if (list.length === 0) {
        list = people.filter(item => {
          return item.skin_color === valueSkin;
        });
      } else {
        list = list.filter(item => {
          return item.skin_color === valueSkin;
        });
      }
    }
    console.log(list);
    dispatch(setFilterPeople(list));
    dispatch(setIsFiltred(true));
  };
  return (
    <View style={styles.mainContainer}>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
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
                <View style={[styles.viewDropDown, {zIndex: 3}]}>
                  <Text>{Strings.INFO_PROPS_HAIR_COLOR}</Text>
                  <DropDownPicker
                    open={openHair}
                    value={valueHair}
                    items={itemsHair}
                    setOpen={setOpenHair}
                    setValue={setValueHair}
                    setItems={setItemsHair}
                    containerStyle={styles.containerStyleDropDown}
                  />
                </View>

                <View style={styles.viewDropDown}>
                  <Text>{Strings.INFO_PROPS_SKIN_COLOR}</Text>
                  <DropDownPicker
                    open={openSkin}
                    value={valueSkin}
                    items={itemsSkin}
                    setOpen={setOpenSkin}
                    setValue={setValueSkin}
                    setItems={setItemsSkin}
                    containerStyle={styles.containerStyleDropDown}
                  />
                </View>

                <AppButton title={'Filtred'} onPressButton={onFiltred} />
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
    backgroundColor: Colors.BLUE_3,
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
    height: '70%',
    width: '80%',
    borderRadius: 16,
    padding: 16,
  },
  svgContainer: {
    width: '80%',
    marginBottom: 8,
  },
  svg: {
    alignSelf: 'flex-end',
  },
  viewDropDown: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  containerStyleDropDown: {
    maxWidth: '100%',
  },
});

export default ModalFilter;
