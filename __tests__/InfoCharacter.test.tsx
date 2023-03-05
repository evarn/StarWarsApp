import 'react-native';
import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import InfoCharacter from '../src/screens/card/components/modal/InfoCharacter';

afterEach(cleanup);

describe('InfoCharacter', () => {
  it('InfoCharacter snapshoot', () => {
    const {toJSON} = render(
      <InfoCharacter
        hair_color={'blond'}
        skin_color={'blond'}
        eye_color={undefined}
        height={undefined}
        mass={undefined}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('InfoCharacter text', () => {
    const {getByText} = render(
      <InfoCharacter
        hair_color={'blond'}
        skin_color={'blond'}
        eye_color={undefined}
        height={undefined}
        mass={undefined}
      />,
    );
    const hair_color = 'hair color: ';
    const foundTextHair = getByText(hair_color);

    const height = 'skin color: ';
    const foundTextHeight = getByText(height);

    expect(foundTextHair.props.children).toEqual(hair_color);
    expect(foundTextHeight.props.children).not.toEqual(hair_color);
  });
});
