import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="nav-title">
        Math magicians
      </span>
      <div className="links">

        <a href="/">Home</a>
        <a href="/App">Calculator</a>
        <a href="/Quote">Quote</a>
      </div>
    </nav>

  );
}

export default Navbar;
