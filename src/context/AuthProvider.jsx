import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStroge, setLocalStroge } from '../utils/localStorage'

export const AuthContext = createContext()



function AuthProvider({children}) {

    const [UserData, setUserData] = useState(null)

   useEffect(() => {
    setLocalStroge()
    const {employees,admin} = getLocalStroge()
    setUserData({employees,admin})
   }, [])
   
  return (
    <div>
        <AuthContext.Provider value={UserData}>
          {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider