import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navigation">
      <Link className="nav-link" to ='/'>| Home |</Link>
      <Link className="nav-link" to ='/add-practice-routine'>| Setup Your Practice Routine |</Link>
    </nav>
  );
};

export default Nav;