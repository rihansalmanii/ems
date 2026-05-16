import React from 'react'
import Header from '../EmpDashboard/Header'
import Blocks from '../EmpDashboard/Blocks'
import TaskList from '../EmpDashboard/TaskList'

const EmployeeDashboard = ({setUser, data}) => {

 
  return (
    <div>
      <Header setUser={setUser} data={data}/>
      <Blocks data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
