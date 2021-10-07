import React from 'react';
import "./Header.css"
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import app from "../../../firebase_config/firebase";
import logo from "../../../img/logo.png"

const Header = () => {
  return (
    <Navbar expand="lg" className="head">
      <Container>
        <Nav>
          <Nav.Link>
            <img src={logo} width="55" height="70" alt="Q"/>
          </Nav.Link>
        </Nav>
        <Navbar.Brand href="/" className="name">Всеобуч<br/>Центр Инвест</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/course" className="title">Курсы</Nav.Link>
            <Nav.Link href="/about" className="title">Информация</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <NavLink onClick={() => app.auth().signOut()} className="title margin:0;">Выйти</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;