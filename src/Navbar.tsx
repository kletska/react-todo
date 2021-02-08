import React from 'react';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2">
      <a href="#" className="brand-logo">Todo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Todo</a></li>
        <li><a href="/">About asss</a></li>
      </ul>
    </div>
  </nav>
)