import React, { useState } from 'react'
import {Link , useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import {Logo , Button, Inputbox} from './index'
import { useForm } from 'react-hook-form'
import img1 from '../imgs/bg.jpg'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   const [error  , setError] = useState("")
    const {register , handleSubmit} = useForm()

    const login = async (data)=>{
        setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                    navigate('/')
                    window.location.reload()
                }
            }
        } catch (error) {
            setError(error.message)
        }

    }
  return (

    <div className='flex  py-10 h-screen flex-col  items-center  ' >
       
        
        {error && <p>{error}</p> }
        <form onSubmit={handleSubmit(login)}>
            <div className=' flex bg-orange-400 p-10 py-20    flex-col items-center rounded-md'>
            <div className='-mt-12 mb-10'>
            <span>
                <Logo width = "100%" className='text-white text-3xl' ></Logo>
            </span>
        </div>
                <h2 className='font-bold  '>Sign to your account</h2>
                <div className='mt-3'>
                    <label htmlFor="" className=''>Email</label>
                    <Inputbox
                label = "email: "
                placeholder = "Enter your email"
                classNames= "mt-2 rounded-sm p-2 px-4 placeholder-black placeholder-opacity-30 bg-transparent hover:border hover:border-black hover:border-opacity-20   outline-none "
                type = "email"
                {...register('email' ,{
                    required : true,
                    validate :{
                        matchPatern : (value)=>{
                            /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email must be valid"
                        }
                    }
                })}
                >
                </Inputbox>
                 <label className='' htmlFor="">Password</label>
                <Inputbox
                label = "Password"
                placeholder = "Enter your password"
                type = "password"
                classNames = "mt-2 rounded-sm p-2 px-4 bg-transparent placeholder-black placeholder-opacity-30 hover:border hover:border-black hover:border-opacity-20 outline-none  "
                {...register('password' , {
                    required : true
                })}
                >                
                </Inputbox>
                </div>
                

                   <Button type='submit' className=' text-black p-2 rounded-sm mt-10 w-[12.8rem] hover:bg-orange-400 hover:shadow-lg font-semibold
                   transition duration-200  ' >Sign in</Button>
                  
        <p className='text-center mt- cursor-pointer '>
            don&apos;t have an account?&nbsp; 
            <Link to='/signup' className='  hover:text-white '>
            Sign Up
            </Link>
        </p>
            </div>
        </form>
    </div>

  )
}

export default Login