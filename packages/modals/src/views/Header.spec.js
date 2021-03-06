/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders danger styling if provided', () => {
    const wrapper = shallow(<Header danger />);

    expect(wrapper).toMatchSnapshot();
  });
});
