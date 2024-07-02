import React from 'react'
import {Logoutbtn ,Footer , } from '../components/index'

import { useSelector } from 'react-redux'
function SetComp() {
    const auth = useSelector((state)=>state.auth.status)
    return (
        
       auth && <div className='flex flex-col w-screen h-screen  '>
             <Logoutbtn />
          
             <Footer/>
        </div>
      )
}

export default SetComp