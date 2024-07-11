import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "./CartWidget";

export default function MyNavbar() {
    return <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Tienda Tuya</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Tecnología</Nav.Link>
                    <Nav.Link href="#home">Electrodomésticos</Nav.Link>
                    <Nav.Link href="#home">Herramientas</Nav.Link>
                    <Nav.Link href="#features">Construcción</Nav.Link>
                    <Nav.Link href="#pricing">Moda</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    </>
}