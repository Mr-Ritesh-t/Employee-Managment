import React, { useState } from 'react'
import { setLocalStroge } from '../../utils/localStorage'

function Header() {
  
  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }
  //   else{
  //     setusername(data.name)
  //   }

  const logout = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>username 😁</span></h1>
        <button onClick={logout} className='bg-red-500 text-white px-5 py-5 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header