import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const navbarStyle = {
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '1.5em 5em',
    gap: '1.5em',
  };

  const headStyle = {
    color: '#379cf6',
    fontSize: '1.8em',
  };

  const unlistStyle = {
    display: 'flex',
    gap: '1em',
  };

  const listStyle = {
    textDecoration: 'none',
    listStyleType: 'none',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '.9em',
    color: 'gray',
    fontWeight: 'bold',
  };

  const activeNavLinkStyle = {
    color: 'black',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '.9em',
    fontWeight: 'bold',
  };

  const links = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'categories',
      path: 'categories',
    },
  ];

  return (
    <nav style={navbarStyle}>
      <h1 style={headStyle}>CMS&apos;s Bookstore</h1>
      <ul style={unlistStyle}>
        {links.map((link) => (
          <li key={link.name} style={listStyle}>
            <NavLink
              to={link.path}
              // style={navLinkStyle}
              style={link.name === 'home' ? activeNavLinkStyle : navLinkStyle}
              // activeNavLinkStyle={link.name === 'home' ? activeNavLinkStyle : {}}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
