import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './components/pages/404'
import { useAuth } from './hooks/useAuth'
import { routes } from './routes'

const Ways = () => {

  const {isAuth} = useAuth()

  return (
    <BrowserRouter>
    <Routes>
      {routes.map(route => {
        if (route.auth && isAuth) {
          return false
        }
        return (<Route path={route.path} exact={route.exact} element={<route.component/>} key={`route ${route.path}`}/>)
      })}
      <Route element={<Error404/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Ways