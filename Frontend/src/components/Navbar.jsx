
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/logo.svg"; 

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
   
        <Link to="/">
          <img src={Logo} alt="MatchMaker Logo" className="logo" />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/users">All Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
