import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

let house = "🏡";
let routine = "📝";

const Nav = () => {
  return (
    <nav className="navigation">
      <Link className="nav-link" to ='/'> Home {house} </Link>
      <Link className="nav-link" to ='/add-practice-routine'> Setup Your Practice Routine {routine} </Link>
    </nav>
  );
};

export default Nav;