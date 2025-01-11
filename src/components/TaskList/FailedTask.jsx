import React from 'react'

function FailedTask({data}) {
  return (
    <div className='flex-shrink-0 h-[250px] w-[305px] bg-red-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm'>{data.taskDescription}</p>
    <div className='mt-2'>
        <button className='w-full bg-red-500 text-sm rounded py-1 mt-5'>Failed</button>

    </div>
</div>
  )
}

export default FailedTask