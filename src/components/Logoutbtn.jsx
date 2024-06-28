import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
import img1 from '../imgs/logout.png'
function Logoutbtn({
  className = ""
}) {
  const dispatch = useDispatch()

  const btnhandler = ()=>{
    authService.logout()
    .then(()=>{
      dispatch(logout())
    })

  }
  return (
<button onClick={btnhandler}><img src={img1} className={`h-12 ${className}` } alt="" /></button>
  )
}

export default Logoutbtn