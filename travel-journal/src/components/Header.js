import React from 'react';
import Logo from '../logo.svg';

export default function Header() {
  return (
    <nav className="header">
      <img src={Logo} alt="Logo" />
      <span className="header--text">My Travel Journal</span>
    </nav>
  );
}
