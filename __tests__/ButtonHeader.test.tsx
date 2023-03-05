import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import ButtonHeader from '../src/screens/card/components/ButtonHeader';
import Strings from '../src/constants/strings';

describe('ButtonHeader', () => {
  const setModalFilterVisible = {function(): void {}};
  const setIsReset = {function(): void {}};
  it('ButtonHeader snapshoot', () => {
    const {toJSON} = render(
      <ButtonHeader
        setModalFilterVisible={() => setModalFilterVisible}
        setIsReset={() => setIsReset}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('ButtonHeader text', () => {
    const {getByText} = render(
      <ButtonHeader
        setModalFilterVisible={() => setModalFilterVisible}
        setIsReset={() => setIsReset}
      />,
    );
    const filter = Strings.BUTTON_HEADER_FILTER;
    const foundTextFilter = getByText(filter);
    const reset = Strings.BUTTON_HEADER_RESET;
    const foundTextReset = getByText(reset);
    expect(foundTextFilter.props.children).toEqual(filter);
    expect(foundTextReset.props.children).toEqual(reset);
  });
});
