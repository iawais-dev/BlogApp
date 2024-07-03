import React from 'react'
import {Logoutbtn ,Footer , } from '../components/index'

import { useSelector } from 'react-redux'
function SetComp() {
    const auth = useSelector((state)=>state.auth.status)
    return (
        
       auth && <div className='flex flex-col lg:items-center  w-screen h-screen bg-orange-400  '>
            <div className='mt-10 ml-3'>
            <Logoutbtn className='lg:h-24'/>
            </div>
             <Footer/>
        </div>
      )
}

export default SetComp