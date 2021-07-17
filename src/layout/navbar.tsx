import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../components/container';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const links = [
    { to: '/', label: 'List', exact: true },
    { to: '/search', label: 'Search', exact: false },
    { to: '/favorites', label: 'Favorites', exact: false },
  ].map(({ to, label, exact }) => (
    <NavLink activeClassName="font-bold" className="text-center" to={to} exact={exact} key={to}>
      {label}
    </NavLink>
  ));

  return (
    <nav className="bg-black text-white sticky top-0 z-10 shadow p-4">
      <button onClick={() => setShow(!show)} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {show ? <div className="grid grid-cols-1 gap-4">{links}</div> : null}

      <Container className="hidden md:block">
        <div className="flex justify-between">{links}</div>
      </Container>
    </nav>
  );
}
