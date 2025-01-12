import React, { useEffect, useState } from 'react'
import { setLocalStroge } from '../../utils/localStorage'

function Header(props) {
  
  const [username, setusername] = useState('')

  
  useEffect(() => {
    if (!props.data) {
      setusername('Admin');
    } else {
      setusername(props.data.name);
    }
  }, [props.data]);

  const logout = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>{username} 😁</span></h1>
        <button onClick={logout} className='bg-red-500 text-white px-5 py-5 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header