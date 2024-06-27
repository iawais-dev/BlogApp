import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
function Logoutbtn() {
  const dispatch = useDispatch()

  const btnhandler = ()=>{
    authService.logout()
    .then(()=>{
      dispatch(logout())
    })

  }
  return (
<button onClick={btnhandler}>Logout</button>
  )
}

export default Logoutbtn