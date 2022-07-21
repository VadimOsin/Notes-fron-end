import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarHome = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Notes</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarHome;