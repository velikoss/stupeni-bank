import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/molecules/PrivateRoute";

import Login from "./components/molecules/Login/Login";
import SignUp from "./components/molecules/SignUp/SignUp";
import ForgotPassword from "./components/molecules/ForgotPassword/ForgotPassword";
import Main from "./components/molecules/Main/Main";
import Course from "./components/molecules/Course/Course"
function App() {
  return (
    <div>
      <Route exact path="/" component={Main}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/forgot-password" component={ForgotPassword}/>
      <Route exact path="/course" component={Course}/>
    </div>
  );
}

export default App;
