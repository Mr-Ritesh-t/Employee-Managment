import React from 'react'
import Header from '../others/Header'
import TaskNListNumber from '../others/TaskNListNumber'
import TaslList from '../TaskList/TaslList'
function EmployeeDashboard(props) {
  return (
    <div className='p-10 bg-[#1C1C1C] '>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNListNumber data={props.data} />
        <TaslList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard