import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import LoginPage from './pages/login.page';
import Topmenu from './components/TopMeu';
import Banner from './components/Jumbotron';

function App() {
  return (
    <Router>
      <div className="App">
        <Topmenu />
        <Banner />
      </div>

      <Switch>
        {/* <Route path="/" exact component={homePage}/> */}
        <Route path='/login' component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
