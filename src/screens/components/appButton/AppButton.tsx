import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

interface IAppButton {
  title: string;
  onPressButton?: ((event: GestureResponderEvent) => void) | undefined;
  styleView?: StyleProp<ViewStyle>;
}

const AppButton = ({title, onPressButton, styleView}: IAppButton) => {
  return (
    <TouchableOpacity style={[styles.btn, styleView]} onPress={onPressButton}>
      <Text style={styles.text_btn}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.YELLOW_1,
    borderRadius: 11,
    width: 231,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    alignSelf: 'center',
  },
  text_btn: {
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 23,
    color: Colors.BLACK_2,
  },
});

export default AppButton;
