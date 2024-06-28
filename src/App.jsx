import { useState , useEffect } from "react"
import { login, logout } from "./store/authSlice"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import Headercomp from "./components/Headercomp"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
function App() {
const [loading , setLoading] = useState (true)
const dispatch = useDispatch()


useEffect(()=>{


  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
     dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }

  })
  .finally(()=>setLoading(false))
},[])

  return !loading ? (
  <div className=" ">
    <div className="">
<Headercomp></Headercomp>
      <main>
        <Outlet/>
      </main>
{/* <Footer></Footer> */}
    </div>
  </div>) : null
  
}

export default App
