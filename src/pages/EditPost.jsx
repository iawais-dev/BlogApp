import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import {Container , PostForm}  from '../components/index'
import { useParams , useNavigate } from 'react-router-dom'

function EditPost() {
    const navigate = useNavigate()
    const {slug} = useParams()
    const [post , setPost] = useState(null)

    useEffect(()=>{
       if(slug){
        service.getPost(slug).then((post)=>{
            if(post){
          setPost(post)  
            }
        })
       }else{
        navigate('/')
       }
    },[slug , navigate])
  return post ? ( 
  <div>
    <Container>
        <PostForm post={post}>

        </PostForm>
    </Container>
  </div>) : null
}

export default EditPost