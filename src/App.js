import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                </Switch>
            </Router>

      </div>
    );
  }
}

export default App;
