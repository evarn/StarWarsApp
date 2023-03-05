import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Strings from '../src/constants/strings';
import CircleCharacter from '../src/screens/card/components/Circle';
import Colors from './../src/constants/colors';

describe('CircleCharacter', () => {
  it('CircleCharacter snapshoot', () => {
    const {toJSON} = render(
      <CircleCharacter
        title={'mass'}
        param={'50'}
        style={{backgroundColor: Colors.BLACK_1}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('CircleCharacter text', () => {
    const {getByText} = render(
      <CircleCharacter
        title={'mass'}
        param={'50'}
        style={{backgroundColor: Colors.BLACK_1}}
      />,
    );
    const title = 'mass';
    const foundTextTitle = getByText(title);
    expect(foundTextTitle.props.children).toEqual(title);
  });
});
