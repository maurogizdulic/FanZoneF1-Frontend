import React, { useState, useEffect } from 'react';
import Navbar from './componentsNavbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Latest from './components/latest';
import Schedule from './components/schedule';
import Standings from './components/standings';
import Betting from './components/betting';
import LogIn from './components/login';
import WebPage from './componentsLatest/cardWebPage';
import SignUp from './componentsSignUp/signup';
import Logout from './components/logout.js'
import TableStandings from './componentsStandings/tableStandings';
import {getToken} from './util/common.js'
import Dashboard from './componentsDashboard/dashboard.js';

function App(){
  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/latest' component={Latest} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/standings' component={Standings} />
        <Route path='/betting' component={Betting} />
        <Route path='/login' component={LogIn} />
        <Route path='/cardWebPage' component={WebPage} />
        <Route path='/signup' component={SignUp}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;

/* OVO JE BILO UNUTAR return tu gore po defaultu    
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/