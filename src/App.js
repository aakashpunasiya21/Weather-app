import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './container/Login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './container/Dashbord';
function App() {
  return (
    <Router>
    <div>
     
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          
        </Switch>
      </div>
      </Router>
  );
}

export default App;
