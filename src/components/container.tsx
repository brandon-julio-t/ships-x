import React from 'react';
import BaseProps from '../interfaces/base-props';

function Container(props: BaseProps) {
  const { children, className } = props;
  return <div className={`max-w-7xl mx-auto sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default Container;
