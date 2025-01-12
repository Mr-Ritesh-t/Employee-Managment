import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import { AuthContext } from '../../context/authProvider'

function CreateTask() {

  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const sumitHandler = (e) => {
    e.preventDefault();
    const newTaskObj = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false };
  
    const data = userData;
    data.forEach(function (elem) {
      if (elem.name === asignTo) {
        elem.tasks.push(newTaskObj);
        elem.taskCount.newTask = (elem.taskCount.newTask) + 1;
      }
    });
    setUserData(data);
    setNewTask(newTaskObj); // Optional, if you still need to set state
  
    setAsignTo('')
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setCategory('') 

    alert('Task Added Successfully')
    
      
   
  }


  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">

        <form className="flex flex-wrap w-full  items-start justify-between" onSubmit={(e)=>{
          sumitHandler(e)
        }}>

          <div className="w-1/2">

            <div>

              <h3 className="text-sm text-gray-300 mt-0.5">Task Title</h3>

              <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)}
                className=" border-white bg-transparent border-[1px] rounded p-2 w-[80%] outline-none mb-4"
                type="text"
                placeholder="Make ui design"
                name=""
                id=""
              />

            </div>

            <div>

              <h3>Date</h3>

              <input
              value={taskDate} onChange={(e)=>setTaskDate(e.target.value)}
                className=" border-white bg-transparent border-[1px] rounded p-2 w-[80%] outline-none mb-4"
                type="date"
              />

            </div>

            <div>

              <h3>Assign To</h3>

              <input
              value={asignTo} onChange={(e)=>setAsignTo(e.target.value)}
                className=" border-white bg-transparent border-[1px] rounded p-2 w-[80%] outline-none mb-4"
                type="text"
                placeholder="Emloyee name"
                name=""
                id=""
              />

            </div>

            <div>
              
              <h3>Category</h3>

              <input
              value={category} onChange={(e)=>setCategory(e.target.value)}
                className=" border-white bg-transparent border-[1px] rounded p-2 w-[80%] outline-none mb-4"
                type="text"
                placeholder="dev, design, etc"
              />

            </div>

          </div>

          <div className="w-1/2">

            <h3>Task Description</h3>

            <textarea
            value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}
              className=" border-white bg-transparent border-[1px] rounded p-2 w-[90%] outline-none h-44 mb-4"
              name=""
              id=""
            ></textarea>

            <button className="w-[90%] bg-emerald-600 p-5 rounded hover:bg-emerald-400 mt-4 ">
              Create Task
            </button>

          </div>

        </form>

      </div>
  )


 
  

}

export default CreateTask