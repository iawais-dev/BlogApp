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
    <div>
        <div>
            <div>
                <span>
                    <Logo width= '100%'></Logo>
                </span>
            </div>
            <h2>Sign up to create an account</h2>
            <p>
                Already have an account?&nbsp;
                <Link to='/login'>
                   Sign In
                </Link>
            </p>
            {error && <p>{error}</p> }


            <form onSubmit={handleSubmit(signUp)}>
                <div>
                    <Inputbox 
                    label = "Full Name:"
                    placeholder = "Enter Full Name"
                    {...register('name' ,{
                        required : true
                    })}
                    / >
                        <Inputbox 
                        label = "Email: "
                        placeholder = "Enter Your email address: "
                        {...register('email',{
                            required : true,
                            validate : {
                                matchPatern : (value)=>{
                           /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email must be valid"
                                }
                            }
                        })}
                        / >
                             <Inputbox 
                        label = "Password: "
                        placeholder = "Enter Your Password: "
                        {...register('password',{
                            required : true,
                        })}
                        / >
                            <Button type='submit'>Create Account</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup