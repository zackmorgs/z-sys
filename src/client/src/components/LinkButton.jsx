import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/LinkButton.scss";

export default function LinkButton({ id, className = '', children, to, props}) {
  return (
    <Link {...props} to={to} id={id} className={`link-btn ${className}`.trim()}>
      {children}
    </Link>
  );
}