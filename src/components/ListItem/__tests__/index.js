import React from 'react';
import { render } from '@testing-library/react-native';

import ListItem from '../index';

describe('ListItem Component', () => {
  const defaultProps = {
    item: {
      id: 1,
      images: [{ url: 'http://lorempixel.com/80/80/' }, { url: 'http://lorempixel.com/80/80/' }],
      productVariants: [{ price: '50,00' }, { price: '20,00' }]
    },
    onPress: jest.fn()
  };

  const { getByTestId } = render(<ListItem {...defaultProps} />);

  it('Should render ListItem', () => {
    expect(getByTestId('listItem')).toBeTruthy();
    expect(getByTestId('imgProduct')).toBeTruthy();
    expect(getByTestId('titProduct')).toBeTruthy();
    expect(getByTestId('priceProduct')).toBeTruthy();
  });
});
