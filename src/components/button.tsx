import React from 'react';
import { Link } from 'react-router-dom';
import BaseProps from '../interfaces/base-props';

interface ButtonProps extends BaseProps {
  isExternal?: boolean;
  onClick?: () => void;
  to?: string;
}

export default function Button(props: ButtonProps) {
  const { children, className, isExternal, onClick, to } = props;

  let style =
    `py-2 px-4 border border-black rounded bg-white hover:bg-black text-black hover:text-white transition duration-150 transform-gpu uppercase tracking-widest ${className}`;

  return to ? (
    isExternal ? (
      <a className={style} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link className={style} to={to}>
        {children}
      </Link>
    )
  ) : (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
