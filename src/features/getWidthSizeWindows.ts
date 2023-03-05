import {Dimensions} from 'react-native';

export const getWidthSizeWindows = () => {
  const {width} = Dimensions.get('window');
  const column = Math.round(width / 200);
  const margin = 10;
  const widthSIZE = (width - margin * column * 2) / column;

  return {widthSIZE, column};
};
