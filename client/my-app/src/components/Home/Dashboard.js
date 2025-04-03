import React, { useEffect, useState } from 'react'
import getUser from '../../services/getUser'
import signout from '../../services/signout';
import checkAuth from '../../services/checkAuth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
      const authChecking = async () => {
      if (!(await checkAuth())){
        navigate('/auth');
      }
      else {
        setLoading(false);
      }

      }
      authChecking()
  }, [])

if (loading){
  return <>Loading</>
}
else {


  return (
      
      <>
    
      <div>Welcome User</div>
    <button className='w-20 h-10 bg-red-300 rounded-xl hover:bg-red-400 duration-500 cursor-pointer' onClick={async () => {
      await signout();
    }}>Sign Out</button>
    <button className='w-20 h-10 bg-green-300 rounded-xl hover:bg-green-400 duration-500 cursor-pointer' onClick={async () => {
        console.log(await checkAuth())
    }}>Get User Details</button>
    </>
  )
}

}