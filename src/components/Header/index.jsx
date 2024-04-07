import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/lanches">Lanches</Link></li>
          <li><Link to="/manage">Manage</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;