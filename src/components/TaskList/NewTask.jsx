import React from 'react'

const NewTask = ({taskInfo}) => {
  return (
    <div className="h-110 w-100 bg-yellow-500 rounded-3xl text-white px-5 py-5 shrink-0">
      <div className="flex items-center justify-between">
        <p className="bg-red-600 px-3 py-1 rounded-lg">{taskInfo.category}</p>
        <p>{taskInfo.taskDate}</p>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold w-[80%]">{taskInfo.taskTitle}</h1>
        <p className="mt-3">{taskInfo.taskDescription}</p>
      </div>
    </div>
  )
}

export default NewTask