import React, { useEffect } from 'react'
import getUser from '../../services/getUser'




export default function ProtectedRoute() {
    useEffect(() => {
        const GetUser = async () => {
            const mystatus = await getUser();
            console.log(mystatus)
        }
    
        GetUser()
        
    
    }, [])



  return (
    <div>This is a protected route, only accessible if user is authenticated</div>
  )
}
