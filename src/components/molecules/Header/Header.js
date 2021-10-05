import React from 'react';
import "./Header.css"
import {Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import app from "../../../firebase_config/firebase";

const Header = () => {
  return (
    <Navbar expand="lg" className="head">
      <Container>

        <Navbar.Brand href="/" className="name">Всеобуч<br/>Центр Инвест</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses" className="title">Курсы</Nav.Link>
            <Nav.Link href="/about" className="title">О проекте</Nav.Link>
            <Nav.Link href="/feedbacks" className="title">Отзывы</Nav.Link>
            <Nav.Link onClick={() => app.auth().signOut()} className="title">Выйти</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className="head">
    //   <div className="img"/>
    //   <div className="title">Всеобуч<br/>ЦентрИнвест</div>
    //   <CoursesButton/>
    //   <AboutButton/>
    //   <FeedbacksButton/>
    //   <SignOutButton/>
    // </div>
  )
    ;
};

export default Header;