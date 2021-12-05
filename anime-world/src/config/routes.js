import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import React, { useState } from 'react'
import Home from '../screens/home'
import GlobalStyle from './globalStyle'
import Categorie from '../screens/categorie'
import { Offline, Online } from 'react-detect-offline'
import OfflinePage from '../components/offlinePage'
import Details from '../screens/details'
import { lightTheme, darkTheme } from './theme'
import { ThemeProvider } from 'styled-components'
import {BsFillSunFill,BsFillMoonFill} from "react-icons/bs";

const Routes = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const switchTheme = theme => {
    setCurrentTheme(theme)
  }
  const [themeBool, setThemeBool] = useState(false)
  const switchThemeBridge = (theme, themeBool) => {
    setThemeBool(!themeBool)
    switchTheme(theme)
}
  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        {themeBool ? (
          <BsFillSunFill
            color='#58DD94'
            size='30px'
            onClick={() => switchThemeBridge(lightTheme, themeBool)}
          ></BsFillSunFill>
        ) : (
          <BsFillMoonFill
            color='#58DD94'
            size='30px'
            onClick={() => switchThemeBridge(darkTheme, themeBool)}
          ></BsFillMoonFill>
        )}
        <Online>
          {' '}
          <GlobalStyle />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/categorie' component={Categorie} />
            <Route exact path='/details/:id' component={Details} />
            <Redirect to='/' />
          </Switch>
        </Online>
        <Offline>
          <OfflinePage></OfflinePage>
        </Offline>
      </Router>
    </ThemeProvider>
  )
}

export default Routes
