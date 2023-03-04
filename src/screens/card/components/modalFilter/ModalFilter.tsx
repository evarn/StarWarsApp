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
  const [open, setOpen] = useState(false);
  const [valueHair, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'blond', value: 'blond'},
    {label: 'Banana', value: 'banana'},
  ]);
  useEffect(() => {
    const arr = getLabelHair();
    setItems(arr);
    console.log(arr);
  }, [people]);

  useEffect(() => {
    if (isReset) {
      setValue(null);
      setOpen(false);
      dispatch(setFilterPeople([]))
      dispatch(setIsFiltred(false))
      
    }
  }, [isReset]);

  const getLabelHair = () => {
    let arr: string[] = [];
    people.map(item => {
      arr.push(item.hair_color);
    });
    const newSet = new Set(arr);
    newSet.delete('none');
    newSet.delete('n/a');
    const newAr = Array.from(newSet);
    let newValue = [];
    newValue.push({
      label: 'all',
      value: 'all',
    });
    for (let i = 0; i < newAr.length; i++) {
      newValue.push({
        label: `${newAr[i]}`,
        value: `${newAr[i]}`,
      });
    }

    return newValue;
  };
  const onFiltred = () => {
    setIsReset(false);
    setModalVisible(false);
    if (valueHair === 'all') {
      return dispatch(setFilterPeople([])), dispatch(setIsFiltred(false));
    }
    const list = people.filter(item => {
      return item.hair_color === valueHair;
    });
    console.log(list);
    dispatch(setFilterPeople(list));
    dispatch(setIsFiltred(true));
  };
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
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}>
                  <Text>{Strings.INFO_PROPS_HAIR_COLOR}</Text>
                  <DropDownPicker
                    open={open}
                    value={valueHair}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    containerStyle={{maxWidth: '100%'}}
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
    height: '60%',
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
});

export default ModalFilter;
