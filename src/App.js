import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/molecules/PrivateRoute";
import Login from "./components/molecules/Login";
import SignUp from "./components/molecules/SignUp";
import SignOutButton from "./components/atoms/SignOutButton";
import ForgotPassword from "./components/molecules/ForgotPassword";
import Main from "./components/molecules/Main";
import Course from "./components/molecules/Course";

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
