import React from 'react'
import Routes from './config/routes'
import { Offline, Online } from 'react-detect-offline'

function App() {
  return (
    <div className='App'>
      <Online>
        {' '}
        <Routes />
      </Online>
      <Offline>Only shown offline (surprise!)</Offline>
    </div>
  )
}

export default App
