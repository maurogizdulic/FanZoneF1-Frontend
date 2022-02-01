import React from 'react';
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Betting from './components/betting';
import Latest from './components/latest';
import LogIn from './components/login';
import Logout from './components/logout.js';
import Schedule from './components/schedule';
import Standings from './components/standings';
import Dashboard from './componentsDashboard/dashboard.js';
import WebPage from './componentsLatest/cardWebPage';
import Navbar from './componentsNavbar';
import SignUp from './componentsSignUp/signup';

const options = {
  position: positions.MIDDLE
};

function App() {

  return (
    <Provider template={AlertMUITemplate} {...options}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/latest' component={Latest} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/standings' component={Standings} />
          <Route path='/betting' component={Betting} />
          <Route path='/login' component={LogIn} />
          <Route path='/cardWebPage' component={WebPage} />
          <Route path='/signup' component={SignUp} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;