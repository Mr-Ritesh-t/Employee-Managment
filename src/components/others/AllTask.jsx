import React, { useContext } from 'react'
import { AuthContext } from '../../context/authProvider'

function AllTask() {

  const [userData,setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>
       <div className='bg-blue-500 py-5 px-4 flex justify-between rounded mb-2'>
        <h2 className='w-1/5 text-lg font-medium'>Name</h2>
         <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
         <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
         <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
         <h5 className='w-1/5  text-lg font-medium'>Failed</h5>
        </div>
        
       <div className='h-[80%] overflow-auto'>
       {userData.map(function(elem,idx){
        return <div key={idx} className='border-2 border-emerald-400 py-5 px-4 flex justify-between rounded mb-2'>
        <h2 className='w-1/5  text-lg font-medium '>{elem.name}</h2>
         <h3 className='w-1/5 text-lg font-medium text-yellow-300'>{elem.taskCount.newTask}</h3>
         <h5 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCount.active}</h5>
         <h5 className='w-1/5 text-lg font-medium text-green-500'>{elem.taskCount.completed}</h5>
         <h5 className='w-1/5 text-lg font-medium text-red-500'>{elem.taskCount.failed}</h5>
        </div>
      
        
      })}
       
       </div>
    </div>
  )
}

export default AllTask