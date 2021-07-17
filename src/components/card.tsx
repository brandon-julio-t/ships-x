import React from 'react';
import { Link } from 'react-router-dom';
import BaseProps from '../interfaces/base-props';

interface CardProps extends BaseProps {
  to?: string;
}

export default function Card(props: CardProps) {
  const body = (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-150 transform-gpu">
      <div className="px-4 py-5 sm:px-6">{props.children}</div>
    </div>
  );

  return props.to ? <Link to={props.to}>{body}</Link> : body;
}
