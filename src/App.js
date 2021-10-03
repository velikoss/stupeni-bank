import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/molecules/PrivateRoute";
import Login from "./components/molecules/Login";
import SignUp from "./components/molecules/SignUp";
import SignOutButton from "./components/atoms/SignOutButton";
import ForgotPassword from "./components/molecules/ForgotPassword";

function App() {
  return (
    <div>
      <PrivateRoute exact path="/" component={SignOutButton}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/forgot-password" component={ForgotPassword}/>
    </div>
  );
}

export default App;
