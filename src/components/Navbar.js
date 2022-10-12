import React from "react";
import LogoDark from "../assets/shared/desktop/logo-dark.png";
import HamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../assets/shared/mobile/icon-close.svg";

function Navbar() {
  return (
    <header className="navbar font-40">
      {/* <div className="logoArea">
      </div> */}
      <img className="logo" src={LogoDark} alt="Light logo" />
      <img className="hamburgerIcon" src={HamburgerIcon} alt="Hamburger Icon" />

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
