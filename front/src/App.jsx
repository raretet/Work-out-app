import React from 'react'
import Layout from './components/common/Layout'
import Home from './components/pages/Home/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewWorkout from './components/pages/NewWorkout/NewWorkout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-workout' element={<NewWorkout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App