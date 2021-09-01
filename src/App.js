import React from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import './App.css';
import Layout from './layout/layout.js';
import Login from './login/login.js';
import { Pane } from 'evergreen-ui';


function App() {
  return (
    <Pane>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Layout}/>
            <Route path="/login" component={Login}/>
          </Switch>
      </BrowserRouter>
    </Pane>
  );    
}

export default App;