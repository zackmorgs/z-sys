import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/Button.scss";

export default function Button({ props, children, to }) {
  return (
    <button className={'btn' + " " + props.className}>
      {children}
    </button>
  );
}