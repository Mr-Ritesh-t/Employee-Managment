import React from 'react'

function NewTask({data}) {
  return (
    <div className='flex-shrink-0 h-[250px] w-[305px] bg-yellow-400 rounded-xl p-5'>
<div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm'>{data.taskDescription}</p>
            <div className='mt-6 flex justify-center'>
                <button className='bg-blue-500 py-1 px-2 text-sm rounded'>Accept Task</button>
            </div>
        </div>  
  )
}

export default NewTask