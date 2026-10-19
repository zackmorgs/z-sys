import React from 'react';

import "./styles/Well.scss";

export default function Well({ children, className = '' }) {
    return (
        <div className={`well ${className}`}>
            {children}
        </div>
    );
}