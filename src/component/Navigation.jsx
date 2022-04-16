import React from 'react';
import './Main.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {

    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">Wordle, the Card Game</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/intro">Intro</Nav.Link>
            <Nav.Link href="/easy">Easy</Nav.Link>
            <Nav.Link href="/medium">Medium</Nav.Link>
            <Nav.Link href="/hard">Hard</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}