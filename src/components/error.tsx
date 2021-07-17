import React from 'react';
import BaseProps from '../interfaces/base-props';

export default function Error(props: BaseProps) {
  const { children } = props;
  return <h2 className="text-xl md:text-3xl lg:text-6xl text-center">{children}</h2>;
}
