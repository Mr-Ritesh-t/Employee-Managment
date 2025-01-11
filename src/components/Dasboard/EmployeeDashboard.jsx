import React from 'react'
import Header from '../others/Header'
import TaskNListNumber from '../others/TaskNListNumber'
import TaslList from '../TaskList/TaslList'
function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskNListNumber />
        <TaslList />
    </div>
  )
}

export default EmployeeDashboard