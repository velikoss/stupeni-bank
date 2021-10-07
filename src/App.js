import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/molecules/PrivateRoute";
import Login from "./components/molecules/Login";
import SignUp from "./components/molecules/SignUp";
import ForgotPassword from "./components/molecules/ForgotPassword";
import Main from "./components/molecules/Main";
import Lection1 from "./components/Lections/Lection1.js";
import LectionRoutes from "./components/molecules/LectionRoutes";

function App() {
  return (
    <div>
      <PrivateRoute exact path="/" component={Main}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/forgot-password" component={ForgotPassword}/>
      <PrivateRoute exact path="/course" component={Lection1}/>
      <LectionRoutes/>
    </div>
  );
}

export default App;
