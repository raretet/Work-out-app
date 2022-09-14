import React, { useState } from 'react'
import { AuthContext } from './contexts/AuthContext';
import Ways from './Ways';

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Ways/>
    </AuthContext.Provider>  
  )
}

export default AppRoutes