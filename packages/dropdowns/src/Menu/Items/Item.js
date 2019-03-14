/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import StyledItem from '../../styled/items/StyledItem';
import useDropdownContext from '../../utils/useDropdownContext';
import useMenuContext from '../../utils/useMenuContext';

// eslint-disable-next-line react/prop-types
const Item = ({ value, disabled, component = StyledItem, ...props }) => {
  const {
    downshift: { selectedItem, highlightedIndex, getItemProps, setHighlightedIndex }
  } = useDropdownContext();
  const { itemIndexRef } = useMenuContext();

  if (!value && !disabled) {
    throw new Error('All Item components require a `value` prop');
  }

  const currentIndex = itemIndexRef.current;
  const isFocused = highlightedIndex === currentIndex;
  const isSelected = selectedItem === value;

  useEffect(() => {
    if (!disabled && isSelected && highlightedIndex === null) {
      setHighlightedIndex(currentIndex);
    }
  });

  if (disabled) {
    return React.createElement(component, {
      disabled,
      ...props
    });
  }

  itemIndexRef.current++;

  return React.createElement(
    component,
    getItemProps({
      item: value,
      focused: isFocused,
      checked: isSelected,
      ...props
    })
  );
};

Item.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};

export default Item;
