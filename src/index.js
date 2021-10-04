import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./components/molecules/AuthContext";


ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

