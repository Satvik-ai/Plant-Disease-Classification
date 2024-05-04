import React, { useState } from "react";
import "./App.css";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/Input">Check Plant</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/ContactPage">Contact</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/About">About</Link>
          </li>
        </ul>
        <div className="sign-in">
          {isAuthenticated && (
            <div className="user-info">
              <img src={user.picture} alt={user.name} width={50} />
              <span>Hello , {user.given_name}</span>
            </div>
          )}
        </div>
        {/* <button onClick={() => loginWithRedirect()}>Sign Up</button> */}
        <div className="burger" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
