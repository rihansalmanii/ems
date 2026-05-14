import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'


const Header = ({setUser}) => {

  

  return (
    <div>
      <div className='flex items-center justify-between px-10 py-10'>
        <h1 className='text-3xl font-semibold'><span className='text-xl font-medium'>Hello,</span> <br />Rihan</h1>
        <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold' onClick={() => setUser('')}>Logout</button>
      </div>
    </div>
  )
}

export default Header
