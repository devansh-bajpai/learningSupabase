import React from 'react'
import getUser from '../../services/getUser'
import signout from '../../services/signout';

export default function Dashboard() {
  return (
      
      <>
    
      <div>Welcome User</div>
    <button className='w-20 h-10 bg-red-300 rounded-xl hover:bg-red-400 duration-500 cursor-pointer' onClick={async () => {
      await signout();
    }}>Sign Out</button>
    <button className='w-20 h-10 bg-green-300 rounded-xl hover:bg-green-400 duration-500 cursor-pointer' onClick={async () => {
        await getUser();
    }}>Get User Details</button>
    </>
  )
}
