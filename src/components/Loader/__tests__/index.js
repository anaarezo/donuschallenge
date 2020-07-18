import React from 'react';
import { render } from '@testing-library/react-native';

import Loader from '../index';

describe('Loader component.', () => {
  const { queryByTestId } = render(<Loader />);

  it('Should do the component or page load.', () => {
    expect(queryByTestId('imgLoader')).toBeTruthy();
  });
});
