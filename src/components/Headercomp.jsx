import React from 'react'
import {Container ,Setting} from './index'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import img1 from '../imgs/plus.png'
import img5 from '../imgs/navigation (1).png'
import img3 from '../imgs/homepage.png'
function Headercomp() {
    const authStatus = useSelector((state)=>state.auth.status)

      const navigate = useNavigate()

     const navItem = [
      {
        id: 'home',
      name : <img src={img3} className='h-7' alt="" />,
      slug : '/',
      active : true
      },
      {
        id: 'login',
        name : "Login",
        slug : '/Login',
        active : !authStatus
      },
      {
        id: 'signup',
        name : "Signup",
        slug : '/Signup',
        active : !authStatus
      },
      {
        id: 'all-post',
        name : <img src={img5} className='h-7' alt="" />,
        slug : '/All-posts',
        active : authStatus
      },
      {
        id: 'add-post',
        name : <img src={img1} className='h-7' alt="" />,
        slug : '/Add-post',
        active : authStatus
      }
     ]
    

  return (
    <header className=''>
      <Container>
        <nav className='flex items-center justify-between  p-2'>
          <Link to='/'>
          <Logo  / >
          </Link>
        
        
        <ul className='flex items-center mr-4   '>
          {
            navItem.map((item)=>
              item.active ?( 
                <li className=''  key={item.id}>
                  <button onClick={()=> navigate(item.slug)}
                    className=' px-1  py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                    {item.name}
                  </button>
                </li>
              ): null
               
            )}
            {
              authStatus && (
                <li className='flex items-center'>
                  <Setting />
                </li>
              )
            }
        </ul>
        </nav>
      </Container>
    </header>

  )  
}

export default Headercomp