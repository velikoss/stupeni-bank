import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/molecules/PrivateRoute";
import Login from "./components/molecules/Login/Login";
import SignUp from "./components/molecules/SignUp/SignUp";
import ForgotPassword from "./components/molecules/ForgotPassword/ForgotPassword";
import Main from "./components/molecules/Main/Main";
import Lection1 from "./components/Lections/Lection1.js";
import LectionRoutes from "./components/molecules/LectionRoutes";
import Info from "./components/molecules/Info/Info";
import {useState} from "react";

function App() {

  return (
    <div>
      <Route exact path="/" component={Main}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/about" component={Info}/>
      <Route exact path="/forgot-password" component={ForgotPassword}/>
      <PrivateRoute exact path="/course" component={Lection1}/>
      <LectionRoutes/>
    </div>
  );
}

export default App;
