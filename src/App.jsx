import { useState } from 'react'
import Home from  './components/Home'
import Profile from './components/Profile'
import NotFoundPage from './components/NotFoundPage'
import PostsByTag from './components/PostsByTag'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/tag/:tag' element={<PostsByTag/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
