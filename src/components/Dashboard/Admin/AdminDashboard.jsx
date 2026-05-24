import React, { useContext } from 'react'
import Form from './Form'
import AdminDashboardRight from './AdminDashboardRight'
import { AuthContext } from '../../../contexts/AuthProvider'


const AdminDashboard = ({onLogout, data}) => {

   const handleLogout = () => {
    onLogout();
  }




  return (
    <div className='h-screen w-full '>
      
      <div className='flex items-center justify-between px-20 py-5'>
        <h1 className='text-3xl font-semibold'><span className='text-xl font-medium'>Hello,</span> <br />{data.firstName}</h1>
        <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold' onClick={handleLogout}>Logout</button>
      </div>
      <div className='flex justify-between px-10 py-5'>
        <Form />
      <AdminDashboardRight />
      </div>
    </div>
  )
}

export default AdminDashboard
