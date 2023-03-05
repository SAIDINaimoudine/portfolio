import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  function openMenu() {
    setIsMenuOpened(true)
  }

  function closeMenu() {
    setIsMenuOpened(false)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-items">
          <li><Link to="home" href="#home" smooth="easeInOutQuart" duration={3000} offset={-120} className="navbar-link">Home</Link></li>
          <li><Link to="about" href="#about" smooth="easeInOutQuart" offset={-60} duration={2200} className="navbar-link">About</Link></li>
          <li><Link to="work" href="#wor" smooth="easeInOutQuart" offset={-80} duration={2200} className="navbar-link">Work</Link></li>
          <li><Link to="contact" href="#contact" smooth="easeInOutQuart" offset={0} duration={3000} className="navbar-link">Contact</Link></li>
        </ul>
        <button className="navbar-btn" type="button" aria-label="open menu" onClick={openMenu}>Menu</button>
      </nav>
      <div className={isMenuOpened ? 'navigation-modal' : 'hidden'} role= "nav-modal">
        <nav className="navbar-modal">
          <ul className="navbar-modal-items">
            <li><Link to="home" href="#home" smooth="easeInOutQuart" duration={3000} offset={-120} className="navbar-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="about" href="#about" smooth="easeInOutQuart" offset={-60} duration={2200} className="navbar-link" onClick={closeMenu}>About</Link></li>
            <li><Link to="work" href="#work" smooth="easeInOutQuart" offset={-80} duration={2200} className="navbar-link" onClick={closeMenu}>Work</Link></li>
            <li><Link to="contact" href="#contact" smooth="easeInOutQuart" offset={0} duration={3000} className="navbar-link" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <button className="close-modal" type="button" aria-label="close menu" onClick={closeMenu}><img src='../../../public/icons/close-icon.svg' /></button>
        </nav>
      </div>
    </header>
  )
}

export default Header
