import React, { useState, useEffect } from 'react'
import Navigation from '../components/navigation'
import Logo from '../components/logo'
import Manga from '../components/anime'
const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {}, [])

  return (
    <div className='home'>
      <Logo />
      <Navigation />

      <Manga />
    </div>
  )
}

export default Home
