import React from 'react'

const Blocks = ({ data }) => {

  let newTask = 0;
  let accepted = 0;
  let completed = 0;
  let failed = 0;

  if (data) {
    newTask = data.taskCounts.newTask;
    accepted = data.taskCounts.active;
    completed = data.taskCounts.completed;
    failed = data.taskCounts.failed;
  }


  return (
    <div className='rounded-3xl flex py-5 px-6 gap-5  bg-[#e5e5e5] w-[95%] mx-auto'>
      <div className='h-50 w-95 bg-black rounded-3xl text-white px-5 py-5 flex flex-col justify-between gap-5'>
        <h1 className='text-8xl font-bold'>{newTask}</h1>
        <h1 className='text-2xl font-semibold '>New Tasks</h1>
      </div>
      <div className='h-50 w-95 bg-black rounded-3xl text-white px-5 py-5 flex flex-col justify-between gap-5'>
        <h1 className='text-8xl font-bold'>{completed}</h1>
        <h1 className='text-2xl font-semibold '>Completed Tasks</h1>
      </div>
      <div className='h-50 w-95 bg-black rounded-3xl text-white px-5 py-5 flex flex-col justify-between gap-5'>
        <h1 className='text-8xl font-bold'>{accepted}</h1>
        <h1 className='text-2xl font-semibold '>Accepted Tasks</h1>
      </div>
      <div className='h-50 w-95 bg-black rounded-3xl text-white px-5 py-5 flex flex-col justify-between gap-5'>
        <h1 className='text-8xl font-bold'>{failed}</h1>
        <h1 className='text-2xl font-semibold '>Failed Tasks</h1>
      </div>
      
    </div>
  )
}

export default Blocks
