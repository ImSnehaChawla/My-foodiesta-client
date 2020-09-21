import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/profile">
    <Profile />
      </Route>
    </Router>
    
  );
}

export default App;
