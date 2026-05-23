import React, { useState, useContext } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { AuthContext } from '../../../contexts/AuthProvider';


const Form = () => {

  const [title, setTitile] = useState('')
  const [description, setDescription] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  const { employees } = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      status: 'new',
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      category: category
    }

    const updateEmployees = employees.map((employee) => {
      if(employee.firstName.toLowerCase() == assignTo.toLowerCase()) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1,
          },
        };
      }
      return employee;
    })
    localStorage.setItem('employee', JSON.stringify(updateEmployees))
    
    setTitile('')
    setDescription('')
    setCategory('')
    setAssignTo('')
  }
  

  return (
    <div className='w-fit'>
      <div className='w-fit h-fit px-5 py-5 rounded-3xl bg-[#e2e2e2]'>

        <div className='w-full flex items-center gap-5 mb-8'>
          <span className='p-3 rounded-full text-white bg-black'>
            <FaArrowLeft />
          </span>
          <p className='text-xl font-semibold'>Create Task</p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* TITLE */}
          <p className='pb-0.5'>Enter Title</p>
          <input
            id="task-title"
            type="text"
            placeholder='Make a UI design'
            className='rounded-lg px-3 py-1 w-full mb-4 bg-white'
            value={title}
            onChange={(e) => setTitile(e.target.value)}
          />

          {/* DESCRIPTION */}
          <p className='pb-0.5'>Description</p>
          <textarea
            id="task-description"
            placeholder='Enter detailed description of task'
            cols={40}
            rows={5}
            className='bg-white rounded-lg px-3 py-1 w-full mb-4 resize-none'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* DATE */}
          <p className='pb-0.5'>Date</p>
          <input
            id="task-date"
            type="date"
            className='bg-white rounded-lg px-3 py-1 w-full mb-4'
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />

          {/* ASSIGN TO */}
          <p className='pb-0.5'>Assign To</p>
          <input
            id="task-assign"
            type="text"
            className='bg-white rounded-lg px-3 py-1 w-full mb-4'
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
          />

          {/* CATEGORY */}
          <p className='pb-0.5'>Category</p>
          <input
            id="task-category"
            type="text"
            placeholder='Design, Development, etc..'
            className='bg-white rounded-lg px-3 py-1 w-full mb-4'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button className='bg-black text-white font-semibold text-center w-full py-3 rounded-lg mt-4'>
            Create Task
          </button>

        </form>
      </div>
    </div>
  )
}

export default Form