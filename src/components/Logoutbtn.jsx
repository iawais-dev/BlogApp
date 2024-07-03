import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
import img1 from '../imgs/switch.png'
import { useNavigate} from 'react-router-dom'
function Logoutbtn({
  className = ""
}) {
  const dispatch = useDispatch()
const navigate =useNavigate()
  const btnhandler = ()=>{
    authService.logout()
    .then(()=>{
      dispatch(logout())
    navigate('/')
    })

  }
  return (
<button onClick={btnhandler}><img src={img1} className={`h-12 ${className}` } alt="" /></button>
  )
}

export default Logoutbtn