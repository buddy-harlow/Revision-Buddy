import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home.js'
import SignInPage from './pages/SignInPage/SignInPage';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/sign-in" component={SignInPage} exact/>
      </Switch>
    </Router>
  );
  }
}

export default App;
