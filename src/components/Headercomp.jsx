import React from 'react'
import {Container , Logoutbtn} from './index'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Headercomp() {
    const authStatus = useSelector((state)=>state.auth.status)

      const navigate = useNavigate()

     const navItem = [
      {
      name : "Home",
      slug : '/',
      active : true
      },
      {
        name : "Login",
        slug : '/Login',
        active : !authStatus
      },
      {
        name : "Signup",
        slug : '/Signup',
        active : !authStatus
      },
      {
        name : "All posts",
        slug : '/All-posts',
        active : authStatus
      },
      {
        name : "Add post",
        slug : '/Add-post',
        active : authStatus
      }
     ]
    

  return (
    <header>
      <Container>
        <nav>
          <Link to='/'>
          <Logo  / >
          </Link>
        
        
        <ul>
          {
            navItem.map((item)=>
              item.active ?( 
                <li key={item.name}>
                  <button onClick={()=> navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                    {item.name}
                  </button>
                </li>
              ): null
               
            )}
            {
              authStatus && (
                <li>
                  <Logoutbtn></Logoutbtn>
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