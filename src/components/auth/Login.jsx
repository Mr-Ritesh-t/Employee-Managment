import React, { useState } from 'react'

function Login({handleLogin}) {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler= (e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setemail('')
        setpassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-500  p-20 rounded-2xl'>
            <form onSubmit={(e=>{
                submitHandler(e)
            })} className='flex flex-col items-center justify-center'>
                <input required value={email} onChange={
                    (e)=>setemail(e.target.value)
                } className='border-emerald-600 border-2 rounded-3xl py-3 px-5 m-2 bg-transparent outline-none placeholder:text-gray-400' type='email' placeholder='Entery our Email' />
                <input required value={password} onChange={(e)=>setpassword(e.target.value)}  className='border-emerald-600 border-2 rounded-3xl py-3 px-5 m-2 bg-transparent  outline-none placeholder:text-gray-400' type='password' placeholder='Password' />
                <button className='bg-emerald-600 rounded-3xl py-3 px-5 mt-5  text-gray-300 outline-none placeholder:text-white' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login