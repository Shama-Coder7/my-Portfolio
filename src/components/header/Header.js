import React from 'react';

function Header() {
  return (
    <div>
      <header>
        <div id="menu-bars" className="fas fa-bars"></div>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      
    </div>
  );
}

export default Header;
