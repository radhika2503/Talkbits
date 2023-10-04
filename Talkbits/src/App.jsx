import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login'



function App() {

  return (
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Home' element={<Login/>}></Route>

      </Routes>
     </BrowserRouter>
  )
}

export default App
