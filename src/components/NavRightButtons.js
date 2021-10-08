import React from 'react';
import {Nav, NavLink} from "react-bootstrap";
import coin from "../img/coin.png";
import app from "../firebase_config/firebase";
import {useAuth} from "./molecules/AuthContext";

function NavRightButtons(props) {
  const {currentUser} = useAuth()
  if (currentUser) {
    return (
      <div>
        <Nav className="justify-content-end">
          <Nav.Link className="title">
            <div className="coins">
              Ваш счет: <br/>{props.money} &ensp;
              <img src={coin} alt="Check Internet Connection" width="30" height="30"/>
            </div>
          </Nav.Link>
          <NavLink onClick={() => app.auth().signOut()} className="title margin:0;">Выйти</NavLink>
        </Nav>
      </div>
    );
  } else {
    return (<>

    </>)
  }
}

export default NavRightButtons;
