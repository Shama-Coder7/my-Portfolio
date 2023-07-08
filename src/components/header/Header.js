import React, { useState } from 'react';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <header>
      <div id="menu-bars" className={`fas fa-bars ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

        <nav className={`navbar ${isSidebarOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div className="close-button" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </div>
          <nav className="sidebar-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
