import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import CreateUpdate from './page/CreateUpdate'
import List from './page/List'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<List/>} path='/'></Route>
          <Route element={<CreateUpdate/>} path='/Create'></Route>
          <Route element={<CreateUpdate/>} path='/update/:id'></Route>
          <Route element={<List/>} path='/delete/:id'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
