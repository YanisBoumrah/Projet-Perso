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
import { Offline, Online } from 'react-detect-offline'
import OfflinePage from '../components/offlinePage'
const Routes = () => {
  return (
    <div>
      <Router>
        <Online>
          {' '}
          <GlobalStyle />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/categorie' component={Categorie} />
            <Redirect to='/' />
          </Switch>
        </Online>
        <Offline>
          <OfflinePage></OfflinePage>
        </Offline>
      </Router>
    </div>
  )
}

export default Routes
