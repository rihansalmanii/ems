import React from 'react'

const TaskCards = ({bgColor}) => {
  return (
    <div className="h-110 w-100 bg-black rounded-3xl text-white px-5 py-5 shrink-0" style={{backgroundColor: bgColor}}>
        <div className='flex items-center justify-between'>
            <p className='bg-red-600 px-3 py-1 rounded-lg'>High</p>
            <p>{new Date().toDateString()}</p>
      
    </div>
    </div>
  )
}

export default TaskCards
