import {IPeopleCard} from '../redux/store/types';

interface IGetLabelFromData {
  people: IPeopleCard[];
  atribute: 'hair_color' | 'eye_color' | 'skin_color';
}

export const getLabelFromData = ({people, atribute}: IGetLabelFromData) => {
  let arr: string[] = [];
  people.map(item => {
    arr.push(item[atribute]);
  });
  const newSet = new Set(arr);
  newSet.delete('none');
  newSet.delete('n/a');
  newSet.delete('undefined');
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
