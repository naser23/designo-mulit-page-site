import React from "react";
import { useState } from "react";
import LogoDark from "../assets/shared/desktop/logo-dark.png";
import HamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../assets/shared/mobile/icon-close.svg";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="navbar">
      <div className="logoArea">
        <img className="logo" src={LogoDark} alt="Light logo" />
        <img
          className="hamburgerIcon"
          src={isOpen ? CloseIcon : HamburgerIcon}
          alt="Hamburger Icon"
          onClick={onClick}
        />
      </div>
      {isOpen && <MobileNav />}

      <nav className="navLinks">
        <ul className="links font-20">
          <li className="link">OUR COMPANY</li>
          <li className="link">LOCATIONS</li>
          <li className="link">CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
