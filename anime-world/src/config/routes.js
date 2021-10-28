import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import React from 'react'
import Home from '../screens/home'
import GlobalStyle from './globalStyle'
import Categorie from '../screens/categorie'
const Routes = () => {
  return (
    <Router>
      {' '}
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categorie' component={Categorie} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
