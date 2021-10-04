import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/molecules/PrivateRoute";
import Login from "./components/molecules/Login";
import SignUp from "./components/molecules/SignUp";
import Main from "./components/molecules/Main";

function App() {
  return (
    <div>
      <PrivateRoute exact path="/" component={Main}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
    </div>
  );
}

export default App;
