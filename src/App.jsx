import { useState } from 'react'
import Home from  './components/Home'
import Profile from './components/Profile'
import NotFoundPage from './components/NotFoundPage'
import PostsByTag from './components/PostsByTag'
import PostPageComponent from './components/PostPageComponent';
import SavedPosts from './components/SavedPosts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/store/store'

import './assets/index.css'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile/:id' element={<Profile/>} />
          <Route path='/tag/:tag' element={<PostsByTag/>} />
          <Route path='/post/:postId' element={<PostPageComponent />} />
          <Route path='/saved' element={<SavedPosts />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
