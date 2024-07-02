import React from 'react'

import img1 from '../imgs/setting(1).png'
import { Link } from 'react-router-dom'
function Setting() {



  return (
    <div>
      <Link to='/setting'>

      <img src={img1} className='h-8' alt="" />
      </Link>

 </div>
  )
}

export default Setting