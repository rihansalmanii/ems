import React from 'react'
import Header from '../EmpDashboard/Header'
import Blocks from '../EmpDashboard/Blocks'
import TaskList from '../EmpDashboard/TaskList'

const EmployeeDashboard = ({data, onLogout}) => {
  console.log(data)

  return (
    <div>
      <Header onLogout={onLogout} data={data}/>
      <Blocks data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
