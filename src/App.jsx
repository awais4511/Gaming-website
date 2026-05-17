import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import Arena from './component/Arena'
import Footer from './component/Footer'
import Character from './component/Character'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Character/>
      <Arena/>
      <Footer/>
    </div>
  )
}

export default App