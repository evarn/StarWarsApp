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
  setIsFiltred,
  setFilterPeople,
} from '../../../../redux/store/characterSlice';
import Colors from '../../../../constants/colors';
import IconCloseSVG from '../../../../../assets/icons/closeIcon.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import Strings from '../../../../constants/strings';
import AppButton from '../../../../screens/components/appButton/AppButton';
import {getLabelFromData} from '../../../../features/getLabelFromData';
import {IPeopleCard} from '../../../../redux/store/types';
import Fonts from '../../../../constants/fonts';
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
  const {people} = useAppSelector(selectCharcterData);
  const dispatch = useAppDispatch();
  const [openHair, setOpenHair] = useState(false);
  const [valueHair, setValueHair] = useState(null);
  const [itemsHair, setItemsHair] = useState([
    {
      label: Strings.DROP_PLACEHOLDER_ALL as string,
      value: Strings.DROP_PLACEHOLDER_ALL as string,
    },
  ]);
  const [openSkin, setOpenSkin] = useState(false);
  const [valueSkin, setValueSkin] = useState(null);
  const [itemsSkin, setItemsSkin] = useState([
    {
      label: Strings.DROP_PLACEHOLDER_ALL as string,
      value: Strings.DROP_PLACEHOLDER_ALL as string,
    },
  ]);
  const [openEye, setOpenEye] = useState(false);
  const [valueEye, setValueEye] = useState(null);
  const [itemsEye, setItemsEye] = useState([
    {
      label: Strings.DROP_PLACEHOLDER_ALL as string,
      value: Strings.DROP_PLACEHOLDER_ALL as string,
    },
  ]);

  const [openGender, setOpenGender] = useState(false);
  const [valueGender, setValueGender] = useState(null);
  const [itemsGender, setItemsGender] = useState([
    {
      label: Strings.DROP_PLACEHOLDER_ALL as string,
      value: Strings.DROP_PLACEHOLDER_ALL as string,
    },
    {label: Strings.INFO_MALE as string, value: Strings.INFO_MALE as string},
    {
      label: Strings.INFO_FEMALE as string,
      value: Strings.INFO_FEMALE as string,
    },
    {label: Strings.INFO_OTHER as string, value: Strings.INFO_OTHER as string},
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
    const eye_color = getLabelFromData({
      people: people,
      atribute: 'eye_color',
    });
    setItemsHair(hair_color);
    setItemsSkin(skin_color);
    setItemsEye(eye_color);
  }, [people]);

  useEffect(() => {
    if (isReset) {
      setValueHair(null);
      setOpenHair(false);
      setValueSkin(null);
      setOpenSkin(false);
      setValueEye(null);
      setOpenEye(false);
      setValueGender(null);
      setOpenGender(false);
      dispatch(setFilterPeople([]));
      dispatch(setIsFiltred(false));
    }
  }, [dispatch, isReset]);

  const onFiltred = () => {
    setIsReset(false);
    setModalVisible(false);
    let list: IPeopleCard[] = [];
    if (valueHair !== null) {
      if (valueHair === Strings.DROP_PLACEHOLDER_ALL) {
        list = people;
        setValueHair(null);
      } else {
        list = people.filter(item => {
          return item.hair_color === valueHair;
        });
      }
    }

    if (valueSkin !== null) {
      if (valueSkin === Strings.DROP_PLACEHOLDER_ALL) {
        setValueSkin(null);
        dispatch(setFilterPeople(people));
      } else {
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
    }

    if (valueEye !== null) {
      if (valueEye === Strings.DROP_PLACEHOLDER_ALL) {
        setValueEye(null);
        dispatch(setFilterPeople(people));
      } else {
        if (list.length === 0) {
          list = people.filter(item => {
            return item.eye_color === valueEye;
          });
        } else {
          list = list.filter(item => {
            return item.eye_color === valueEye;
          });
        }
      }
    }

    if (valueGender !== null) {
      if (valueGender === Strings.DROP_PLACEHOLDER_ALL) {
        setValueGender(null);
        dispatch(setFilterPeople(people));
      } else {
        if (list.length === 0) {
          list = people.filter(item => {
            if (valueGender === Strings.INFO_OTHER) {
              return (
                item.gender !== Strings.INFO_MALE &&
                item.gender !== Strings.INFO_MALE
              );
            }
            return item.gender === valueGender;
          });
        } else {
          list = list.filter(item => {
            if (valueGender === Strings.INFO_OTHER) {
              return (
                item.gender !== Strings.INFO_MALE &&
                item.gender !== Strings.INFO_MALE
              );
            }
            return item.gender === valueGender;
          });
        }
      }
    }

    if (
      (valueHair === null || valueHair === Strings.DROP_PLACEHOLDER_ALL) &&
      (valueSkin === null || valueSkin === Strings.DROP_PLACEHOLDER_ALL) &&
      (valueEye === null || valueEye === Strings.DROP_PLACEHOLDER_ALL) &&
      (valueGender === null || valueGender === Strings.DROP_PLACEHOLDER_ALL)
    ) {
      dispatch(setFilterPeople([]));
      dispatch(setIsFiltred(false));
      return;
    }
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
                <View style={[styles.viewDropDown, {zIndex: 5}]}>
                  <Text style={styles.text}>
                    {Strings.DROP_PLACEHOLDER_GENDER}
                  </Text>
                  <DropDownPicker
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                      nestedScrollEnabled: true,
                    }}
                    open={openGender}
                    value={valueGender}
                    items={itemsGender}
                    setOpen={setOpenGender}
                    setValue={setValueGender}
                    setItems={setItemsGender}
                    containerStyle={styles.containerStyleDropDown}
                  />
                </View>

                <View style={[styles.viewDropDown, {zIndex: 4}]}>
                  <Text style={styles.text}>
                    {Strings.DROP_PLACEHOLDER_HAIR}
                  </Text>
                  <DropDownPicker
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                      nestedScrollEnabled: true,
                    }}
                    open={openHair}
                    value={valueHair}
                    items={itemsHair}
                    setOpen={setOpenHair}
                    setValue={setValueHair}
                    setItems={setItemsHair}
                    containerStyle={styles.containerStyleDropDown}
                  />
                </View>

                <View style={[styles.viewDropDown, {zIndex: 3}]}>
                  <Text style={styles.text}>
                    {Strings.DROP_PLACEHOLDER_SKIN}
                  </Text>
                  <DropDownPicker
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                      nestedScrollEnabled: true,
                    }}
                    open={openSkin}
                    value={valueSkin}
                    items={itemsSkin}
                    setOpen={setOpenSkin}
                    setValue={setValueSkin}
                    setItems={setItemsSkin}
                    containerStyle={styles.containerStyleDropDown}
                  />
                </View>
                <View style={styles.viewDropDown}>
                  <Text style={styles.text}>
                    {Strings.DROP_PLACEHOLDER_EYES}
                  </Text>
                  <DropDownPicker
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                      nestedScrollEnabled: true,
                    }}
                    open={openEye}
                    value={valueEye}
                    items={itemsEye}
                    setOpen={setOpenEye}
                    setValue={setValueEye}
                    setItems={setItemsEye}
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
  text: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    color: Colors.WHITE_2,
    textAlign: 'center',
  },
});

export default ModalFilter;
