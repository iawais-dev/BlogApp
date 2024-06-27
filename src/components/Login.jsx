import React, { useState } from 'react'
import {Link , useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import {Logo , Button, Inputbox} from './index'
import { useForm } from 'react-hook-form'



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
                }
            }
        } catch (error) {
            setError(error.message)
        }

    }
  return (
    <div>
    <div>
        <div>
            <span>
                <Logo width = "100%"></Logo>
            </span>
        </div>
        <h2>Sign to your account</h2>

        <p>
            don&apos;t have an account?&nbsp;
            <Link to='/signup'>
            Sign Up
            </Link>
        </p>
        {error && <p>{error}</p> }
        <form onSubmit={handleSubmit(login)}>
            <div>
                <Inputbox
                label = "email: "
                placeholder = "Enter your email"
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

                <Inputbox
                label = "Password"
                placeholder = "Enter your password"
                type = "password"
                {...register('password' , {
                    required : true
                })}
                >                
                </Inputbox>

                   <Button type='submit' >Sign in</Button>
            </div>
        </form>
    </div>

    </div>
  )
}

export default Login