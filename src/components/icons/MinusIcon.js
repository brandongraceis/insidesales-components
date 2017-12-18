import React from 'react';

const MinusIcon = props => (
  <svg remove {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    <title>Minus Icon</title>
    <rect x="25" y="45" width="50" height="10"/>
  </svg>
);

export default MinusIcon;
