import React from 'react'

function TaskNListNumber() {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='
        py-5 px-10 w-[45%] bg-red-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className='
        py-5 px-10 w-[45%] bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className='
        py-5 px-10 w-[45%] bg-green-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className='
        py-5 px-10 w-[45%] bg-yellow-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'> New Task</h3>
        </div>
    </div>
  )
}

export default TaskNListNumber