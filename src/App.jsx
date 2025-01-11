import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { getLocalStroge, setLocalStroge } from './utils/localStorage'
import { AuthContext } from './context/authProvider'

function App() {

  const [user, setUser] = useState(null)

  const [loggedInUserData, setloggedInUserData] = useState(null)

  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }

  },[])
  
  
  
  

  const handleLogin = (email,password) => {
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    }else if(authData){
      const employee =  authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
      setUser('employee')
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
      }
    }
    else{
      alert('invalid credentials')
    }
  }
  
  

  return (
    <>
   {!user ? <Login handleLogin={handleLogin} />: ''}
   {user === 'admin'? <AdminDashboard /> : (user == 'employee'?<EmployeeDashboard data={loggedInUserData}/> : null ) }
    </>
  )
}

export default App

