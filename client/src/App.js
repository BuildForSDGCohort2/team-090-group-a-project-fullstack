import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component.jsx'
import RegistrationPage from './pages/registration/registration.component.jsx';
import LandingPage from './pages/landing/landing.component.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
