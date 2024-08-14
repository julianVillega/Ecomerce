import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './MyNavBar.css';

export default function MyNavbar() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container className='justify-content-between'>
                <Navbar.Brand as={NavLink} to='/'>
                    Tienda Tuya
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={NavLink} to='/category/tecnologia'>
                            Tecnología
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/category/electrodomesticos'>
                            Electrodomésticos
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/category/herramientas'>
                            Herramientas
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/category/materialesConstruccion'>
                            Construcción
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/category/ropa'>
                            Moda
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
