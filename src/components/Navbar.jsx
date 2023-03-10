import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
      
        <ul>
        <Link id="otton" to="/home">OTTON</Link>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
