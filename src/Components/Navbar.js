import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavbarHome = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Notes</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
            </Container>
        </Navbar>
    );
};

export default NavbarHome;