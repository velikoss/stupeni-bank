import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/molecules/PrivateRoute";
import Login from "./components/molecules/Login";
import SignUp from "./components/molecules/SignUp";
import SignOutButton from "./components/atoms/SignOutButton";

// import Testing from "./pages/Testing/Testing";


function App() {
  return (
    <div>
      <PrivateRoute exact path="/" component={SignOutButton}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
    </div>
  );
}

export default App;
