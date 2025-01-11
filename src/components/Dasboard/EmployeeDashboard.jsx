import React from 'react'
import Header from '../others/Header'
import TaskNListNumber from '../others/TaskNListNumber'
import TaslList from '../TaskList/TaslList'
function EmployeeDashboard({data}) {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskNListNumber data={data} />
        <TaslList data={data} />
    </div>
  )
}

export default EmployeeDashboard