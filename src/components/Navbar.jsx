import {NavLink} from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "./CartWidget";

export default function MyNavbar() {
    return(
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={ NavLink } to="/">Tienda Tuya</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={ NavLink } to="/category/1">Tecnología</Nav.Link>
                    <Nav.Link as={ NavLink } to="/category/2">Electrodomésticos</Nav.Link>
                    <Nav.Link as={ NavLink } to="/category/3">Herramientas</Nav.Link>
                    <Nav.Link as={ NavLink } to="/category/4">Construcción</Nav.Link>
                    <Nav.Link as={ NavLink } to="/category/5">Moda</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}