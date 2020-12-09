import React from 'react';

import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <NavLink to="/" exact className="nav-links">
        All movies 
      </NavLink>
      <NavLink to="/movies/genre/:genre" className="nav-links">
        Genre
      </NavLink>
    </header>
  )
}