import React, { useContext } from 'react'
import Form from './Form'
import AdminDashboardRight from './AdminDashboardRight'
import { AuthContext } from '../../../contexts/AuthProvider'


const AdminDashboard = ({setUser}) => {


  return (
    <div className='h-screen w-full '>
      
      <div className='flex items-center justify-between px-10 py-10'>
        <h1 className='text-3xl font-semibold'><span className='text-xl font-medium'>Hello,</span> <br />Rihan</h1>
        <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold' onClick={() => setUser('')}>Logout</button>
      </div>
      <div className='flex gap-40 px-10 py-10'>
        <Form />
      <AdminDashboardRight />
      </div>
    </div>
  )
}

export default AdminDashboard
