// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Power Tools Store</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
