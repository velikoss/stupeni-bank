import './App.css';
import Header from './components/Header/Header.jsx';
import {BrowserRouter, Link, Route, Router, Switch} from "react-router-dom";
import Testing from "./pages/Testing/Testing";


function App() {
    return (
        <div>
            <Switch>
                <Route path="/AnyzBlyz">
                    <Testing/>
                </Route>
                <Route path="/">
                    <Link to="/AnyzBlyz">
                        Picture
                    </Link>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
