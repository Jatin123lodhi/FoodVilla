import React from "react";
import logo from "../logo.png";
const Logo = () => {
    return <img src={logo} alt="logo" className="logo" />;
  };

  const NavList = () => {
    return (
      <div className="navlist">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

  const Header = () => {
    return (
      <div className="header">
        <Logo />
        <NavList />
      </div>
    );
  };

  export default Header;