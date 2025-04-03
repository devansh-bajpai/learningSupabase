import React, { useState } from 'react'
import Signup from './Signup'
import Signin from './Signin'

export default function Auth() {

    const [page, setPage] = useState(0)

  return (
    <div className='bg-slate-800 w-full h-170 flex justify-center items-center'>

        <div className='w-200 h-150 bg-slate-700 rounded-md flex flex-col items-center'>

        {page === 0 && (<Signin setPage={setPage}/>)}
        {page === 1 && (<Signup setPage={setPage}/>)}


        </div>



    </div>
  )
}
