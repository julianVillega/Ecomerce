import { NavLink } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Row } from "react-bootstrap";

export default function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="justify-content-between">
                <Navbar.Brand as={NavLink} to="/">React-Bootstrap</Navbar.Brand>                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/category/1">Tecnología</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/2">Electrodomésticos</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/3">Herramientas</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/4">Construcción</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/5">Moda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}