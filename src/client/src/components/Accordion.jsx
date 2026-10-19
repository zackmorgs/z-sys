import React from 'react';

import "./styles/Accordion.scss";

export default function Accordion({ title, children, className = '', ...detailsProps }) {
  return (
    <details {...detailsProps} className={`accordion ${className}`.trim()}>
      <summary className="accordion-title">{title}</summary>
      <div className="accordion-content">{children}</div>
    </details>
  );
}