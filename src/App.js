import './App.css'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom'
import FullNav from './organisms/FullNav'
import Home from './pages/Home'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import EngineerPage from './pages/EngineerPage'
import AlbumPage from './pages/AlbumPage'

import { auth } from './firebase/firebase.utils'
import UserContext from './context/UserContext'
import ProjectsContext from './context/ProjectsContext'

export const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [currentUser])

  return (

    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <ProjectsContext.Provider value={{ projects, setProjects }}>
        <Router>
          <FullNav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/album/:id" render={(props) => <AlbumPage {...props} />} />
            <Route
              exact
              path="/sign-in"
              render={() => (currentUser
                ? (
                  <Redirect to="/" />)
                : (<SignInPage />))}
            />
            <Route path="/sign-up" component={SignUpPage} exact />
            <Route
              exact
              path="/engineer"
              render={() => (!currentUser
                ? (
                  <Redirect to="/sign-in" />)
                : (<EngineerPage />))}
            />
          </Switch>
        </Router>
      </ProjectsContext.Provider>
    </UserContext.Provider>

  )
}

export default App
