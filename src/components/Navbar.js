// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import TonckaLogo from '../assets/tonkaLogo.png'
const NavigationBar = () => {
    return (
        
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        alt='' width={60} height={60} className='d-inline-block-top'
                        src={TonckaLogo}
                    />
                    Toncka Tools
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#tools">Herramientas</Nav.Link>
                        <Nav.Link href="#pricing">Precio</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                        <Nav.Link href="#about">Contactanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
