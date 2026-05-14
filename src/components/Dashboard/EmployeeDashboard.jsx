import React from 'react'
import Header from '../EmpDashboard/Header'
import Blocks from '../EmpDashboard/Blocks'
import TaskList from '../EmpDashboard/TaskList'

const EmployeeDashboard = ({setUser}) => {
  return (
    <div>
      <Header setUser={setUser}/>
      <Blocks />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
