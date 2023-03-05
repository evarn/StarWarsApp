import React, {Dispatch} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import selectCharcterData from '../../../redux/store/characterSelector';
import TitleCardScreen from './TitleCardScreen';
import Strings from './../../../constants/strings';
import AppButton from '../../components/appButton/AppButton';

interface IButtonHeader {
  setModalFilterVisible: Dispatch<React.SetStateAction<boolean>>;
  setIsReset: Dispatch<React.SetStateAction<boolean>>;
}

const ButtonHeader = ({setModalFilterVisible, setIsReset}: IButtonHeader) => {
  const {count, people, filterPeople, isFiltred} =
    useAppSelector(selectCharcterData);

  const dataFlatlist = isFiltred ? filterPeople : people;

  const _ListHeaderComponent = () => {
    return (
      <>{dataFlatlist.length ? <TitleCardScreen count={count} /> : undefined}</>
    );
  };

  return (
    <View style={styles.bntContainer}>
      <AppButton
        title={Strings.BUTTON_HEADER_FILTER}
        onPressButton={() => setModalFilterVisible(true)}
        styleView={styles.btn}
      />
      <AppButton
        title={Strings.BUTTON_HEADER_RESET}
        onPressButton={() => setIsReset(true)}
        styleView={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bntContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 12,
  },
  btn: {
    maxWidth: '40%',
    marginHorizontal: 12,
  },
});

export default ButtonHeader;
