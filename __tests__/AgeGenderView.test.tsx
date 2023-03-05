import 'react-native';
import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import AgeGenderView from '../src/screens/card/components/AgeGenderView';
import Colors from '../src/constants/colors';
import {toHaveStyle} from '@testing-library/jest-native';

afterEach(cleanup);

describe('AgeGenderView', () => {
  expect.extend({toHaveStyle});
  it('AgeGenderView snapshoot', () => {
    const {toJSON} = render(
      <AgeGenderView birth_year={'69BBY'} gender={'male'} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('AgeGenderView male green  background color', () => {
    const {getByTestId} = render(
      <AgeGenderView birth_year={'69BBY'} gender={'male'} />,
    );
    const foundBodyElement = getByTestId('AgeGenderViewGender');
    expect(foundBodyElement).toHaveStyle({backgroundColor: Colors.GREEN_1});
  });

  it('AgeGenderView female violet background color', () => {
    const {getByTestId} = render(
      <AgeGenderView birth_year={'69BBY'} gender={'female'} />,
    );
    const foundBodyElement = getByTestId('AgeGenderViewGender');
    expect(foundBodyElement).toHaveStyle({backgroundColor: Colors.VIOLET_1});
  });
  it('AgeGenderView other yellow background color', () => {
    const {getByTestId} = render(
      <AgeGenderView birth_year={'69BBY'} gender={'other'} />,
    );
    const foundBodyElement = getByTestId('AgeGenderViewGender');
    expect(foundBodyElement).toHaveStyle({backgroundColor: Colors.YELLOW_1});
  });
  it('AgeGenderView birth year', () => {
    const {getByTestId} = render(
      <AgeGenderView birth_year={'69BBY'} gender={'other'} />,
    );
    const foundBodyElement = getByTestId('AgeGenderViewYear');
    expect(foundBodyElement).toHaveStyle({backgroundColor: Colors.BLUE_1});
  });
});
