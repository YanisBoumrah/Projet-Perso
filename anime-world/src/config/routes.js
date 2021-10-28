import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import React from 'react'
import Home from '../screens/home'
import GlobalStyle from './globalStyle'
import { ThemeProvider } from 'styled-components'
import Categorie from '../screens/categorie'
import AnimeDetail from '../screens/animeDetail'
import Recherche from '../screens/recherche'
const Routes = () => {
  return (
    <Router>
      {' '}
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categorie' component={Categorie} />
        <Route exact path='/recherche' component={Recherche} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes

/*<Route exact path='/animeDetail' component={AnimeDetail} />*/
/*<Route exact path='/recherche' component={Recherche} /> */
