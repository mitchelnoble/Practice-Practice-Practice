import React from 'react';
import { Link } from 'react-router-dom';

import "./Nav.css"

const Nav = () => {
  return (
    <nav>
      <Link to ='/'>Home</Link>
      <Link to ='/add-practice-routine'>Setup Your Practice Routine</Link>
    </nav>
  );
};

export default Nav;