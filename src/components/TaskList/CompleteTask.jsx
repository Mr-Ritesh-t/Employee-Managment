import React from 'react'

function CompleteTask({data}) {
  console.log(data.taskDescription)
  return (
    <div className='flex-shrink-0 h-[250px] w-[305px] bg-blue-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm'>{data.taskDescription}</p>
    <div className='mt-2'>
        <button className='w-full bg-green-500 rounded text-sm py-1 mt-5'>Completed</button>

    </div>
</div>  
  )
}

export default CompleteTask