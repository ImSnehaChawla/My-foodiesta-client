import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
// import Signup from './components/pages/Signup';
// import Login from './components/pages/Login';
import Welcome from './components/pages/Main';
import Profile from './components/pages/Profile';
import CreatePost from './components/pages/createpost';
import { userContext } from "./components/context";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <Router>
     
       <userContext.Provider value={{ token, setToken }}>
       <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route> */}
      <Route path="/profile">
    <Profile />
      </Route>
      <Route path="/createpost">
    <CreatePost />
      </Route>
      <Route path="/main">
        <Navbar/>
        <Welcome />
      </Route>
      </userContext.Provider>
    </Router>
    
  );
}

export default App;
