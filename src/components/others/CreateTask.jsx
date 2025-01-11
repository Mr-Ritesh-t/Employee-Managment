import React from 'react'

function CreateTask() {

  const sumitHandler = () =>{
    
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex flex-wrap w-full  items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mt-0.5">Task Title</h3>
              <input
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
                className=" border-white bg-transparent border-[1px] rounded p-2 w-[80%] outline-none mb-4"
                type="date"
              />
            </div>
            <div>
              <h3>Assign To</h3>
              <input
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
                className=" border-white bg-transparent border-[1px] rounded p-2 w-[80%] outline-none mb-4"
                type="text"
                placeholder="dev, design, etc"
              />
            </div>
          </div>

          <div className="w-1/2">
            <h3>Task Description</h3>
            <textarea
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