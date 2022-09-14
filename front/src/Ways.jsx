import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/pages/Auth/Auth'
import Home from './components/pages/Home/Home'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'

const Ways = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-workout' element={<NewWorkout/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Ways