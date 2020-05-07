import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'
import Register from './components/Register'
import User from './components/Uesr'
import Admin from './components/Admin'

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <p>Hidden-Flights</p>
        </header>
      </div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user" component={User} />
            <Route path="/admin" component={Admin} />
            
            <Register />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
