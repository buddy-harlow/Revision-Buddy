import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home.js'
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/sign-in" component={SignInPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
