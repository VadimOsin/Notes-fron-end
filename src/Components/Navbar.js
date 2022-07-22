import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useContext} from "react";
import {userContext} from "../context/userContext";
import {Link} from "react-router-dom";

const NavbarHome = () => {
    const {user, setUser} = useContext(userContext)
    return (
        <Navbar bg="secondary" >
            <Container fluid>
                <Navbar.Brand href="#">Notes</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <Link to="/login" onClick={() => setUser({
                        id: '',
                        userName: '',
                        password: '',
                        role: '',
                        isAuth: false
                    })}> {user.userName}</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarHome;