import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Button , Logo , Inputbox} from '../components/index'
import { useDispatch } from 'react-redux'
import { useNavigate , Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {login} from '../store/authSlice'
function Signup() {
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    const [error , setError] = useState('')
    const {register , handleSubmit} = useForm()

    const signUp = async (data)=>{
        setError('')
        try {
            const userData = await authService.createAcount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                    navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex  py-10 h-screen flex-col  items-center'>
        <div className='flex bg-orange-400 p-10 py-20    flex-col items-center rounded-md'>
            <div className='-mt-12 mb-10'>
                <span>
                    <Logo width= '100%' className='text-white text-3xl'></Logo>
                </span>
            </div>
             <h2 className='font-bold'>Sign up to create an account</h2>
            {error && <p>{error}</p> }


            <form onSubmit={handleSubmit(signUp)}>
                <div className='mt-3'>
                    <label htmlFor="">Full Name</label>
                    <Inputbox 
                    label = "Full Name:"
                    placeholder = "Enter Full Name"
                    className = "mt-4 rounded-sm p-2 px-4 placeholder-black placeholder-opacity-30 bg-transparent hover:border hover:border-black hover:border-opacity-20   outline-none"
                    {...register('name' ,{
                        required : true
                    })}

                    / >
                    <label htmlFor="">Email</label>

                        <Inputbox 
                        label = "Email: "
                        placeholder = "Enter Your email address "
                        className = "mt-4  rounded-sm p-2 px-4 placeholder-black placeholder-opacity-30 bg-transparent hover:border hover:border-black hover:border-opacity-20   outline-none"
                        {...register('email',{
                            required : true,
                            validate : {
                                matchPatern : (value)=>{
                           /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email must be valid"
                                }
                            }
                        })}
                        / >
                    <label htmlFor="">Password</label>

                             <Inputbox 
                        label = "Password: "
                        placeholder = "Enter Your Password "
                        className = "mt-4 rounded-sm p-2 px-4 placeholder-black placeholder-opacity-30 bg-transparent hover:border hover:border-black hover:border-opacity-20   outline-none"
                        {...register('password',{
                            required : true,
                        })}
                        / >
                            <Button type='submit' className=' text-black p-2 rounded-sm mt-10 w-[12.8rem] hover:bg-orange-400 hover:shadow-lg font-semibold
                   transition duration-200  ' >Create Account</Button>
                </div>
            </form>
           
            <p>
                Already have an account?&nbsp;
                <Link to='/login' className='hover:text-white'>
                   Sign In
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Signup