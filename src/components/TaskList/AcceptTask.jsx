import React from 'react'

function AcceptTask({data}) {
  return (
    <div className='flex-shrink-0 w-[305px] h-[250px] bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm'>{data.taskDescription}</p>
            <div className='flex justify-between mt-6'>
              <button className='bg-green-500 py-1 px-2 text-sm rounded'>Marks as complete</button>
              <button className='bg-red-500 py-1 px-2 text-sm rounded'>Marks as failed</button>
            </div>
        </div>  
  )
}

export default AcceptTask