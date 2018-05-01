import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/logout/LogoutPage'
import SignupPage from './components/signup/SignupPage'
import HomePage from './components/index/HomePage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route exact path="/home" component={HomePage} />
        </div>
      </Router>
    )
  }
}

export default App;
