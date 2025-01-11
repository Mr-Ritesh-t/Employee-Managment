import React from 'react'

function TaskNListNumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5  screen'>
        <div className='
        py-5 px-10 w-[44%] bg-blue-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className='
        py-5 px-10 w-[44%] bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'> Accepted</h3>
        </div>
        <div className='
        py-5 px-10 w-[44%] bg-green-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'> Completed </h3>
        </div>
        <div className='
        py-5 px-10 w-[44%] bg-red-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'> Failed</h3>
        </div>
    </div>
  )
}

export default TaskNListNumber