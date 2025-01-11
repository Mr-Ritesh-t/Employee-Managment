import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { getLocalStroge, setLocalStroge } from './utils/localStorage'
import { AuthContext } from './context/authProvider'

function App() {
  
  const [user, setuser] = useState(null)
  const authData = useContext(AuthContext)
  
  const handleLogin = (email,password) =>{
     if(authData && authData.UserData.admin.find((e)=>email == e.email && e.password == password )){
      setuser('admin')
      console.log(user)
    }

    else if(authData && authData.UserData.employees.find((e)=>email == e.email && e.password == password ))
    {
      setuser('employee')
      console.log(user)

    }
    else{
      alert("Invalid Credentials")
    }
  }

  

  return (
    <>
   {!user ? <Login handleLogin={handleLogin} /> :''}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard></EmployeeDashboard>} 
   
    </>
  )
}

export default App