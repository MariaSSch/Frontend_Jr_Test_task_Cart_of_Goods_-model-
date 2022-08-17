import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./Navbar.css"
import NavBarLogo from './../NavBarLogo/NavBarLogo';
import NavBarCart from '../NavBarCart/NavBarCart';

export default function NavBar() {
    

    return (
    <Navbar bg="light" >
            <Container>
                <NavBarLogo />
                <NavBarCart />
            </Container>
        </Navbar>
  )
}

