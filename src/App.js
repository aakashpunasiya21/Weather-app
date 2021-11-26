import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './container/Login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './container/Dashbord';

import History from './container/History';
function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dasbord" component={Dashboard} />
          <Route path ="/History" component={History} />

         </Switch>
      </div>
    </Router>
  );
}

export default App;
