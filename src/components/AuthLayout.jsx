import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function AuthLayout({
    children , authentication = true
}) {
    const navigate = useNavigate()
    const status = useSelector(state => state.auth.status)
      const [loading , setLoading] = useState(true)

      useEffect(()=>{
        if(authentication && status !== authentication){
            navigate('/login')
        }
        //false && false
        else if(!authentication && status !== authentication){
            navigate('/')
        }
        setLoading(false)
      },[status , navigate , authentication] )


  return loading ? <h1>Loading</h1> : <>{children} </>
}

