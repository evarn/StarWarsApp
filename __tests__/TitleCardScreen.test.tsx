import 'react-native';
import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import TitleCardScreen from '../src/screens/card/components/TitleCardScreen';

afterEach(cleanup);

describe('TitleCardScreen', () => {
  it('TitleCardScreen snapshoot', () => {
    const {toJSON} = render(<TitleCardScreen count={0} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('TitleCardScreen text', () => {
    const {getByText} = render(<TitleCardScreen count={0} />);
    const text = 'for you to choose your favorite';
    const foundText = getByText(text);
    expect(foundText.props.children).toEqual(text);
  });
});
