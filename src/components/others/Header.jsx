import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>Ritesh 😁</span></h1>
        <button className='bg-red-500 text-white px-5 py-5 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header