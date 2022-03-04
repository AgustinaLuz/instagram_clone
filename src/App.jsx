import { useState } from 'react'
import logo from './logo.svg'
import Home from  './components/Home'
import Navbar from './components/Navbar'
import './assets/index.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      
    </div>
  )
}

export default App
