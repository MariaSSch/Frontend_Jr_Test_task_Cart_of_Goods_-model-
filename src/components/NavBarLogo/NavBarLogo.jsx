import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../../assets/logo.png";

export default function NavBarLogo() {
  return (
    <Navbar.Brand>
        <img
            alt="logo"
            src={logo}
            className="d-inline-block align-top"
            />
    </Navbar.Brand>
  )
}

