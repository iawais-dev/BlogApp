import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Button , RTE , Inputbox ,Select} from '../index'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config'

 export default function PostForm({post}) {
    const navigate = useNavigate()
    const userData = useSelector((state)=>state.auth.userData)

  const {control, getValues ,setValue ,watch ,register , handleSubmit} = useForm({
    defaultValues:{
        title : post?.title || '',
        slug : post?.$id || '',
        content : post?.content || '',
        status : post?.status || 'active',
    }
  })
 

   const submit = async (data)=>{
         if(post){
          const file = data.image[0] ? await service.fileUpload(data.image[0]) : null
            if(file){
              service.fileDelete(post.featuredImage)
            }
            const dbPost = await service.updatePost(post.$id ,{ 
              ...data,
              featuredImage: file ? file.$id : undefined
            })
            if(dbPost){
              navigate(`/post/${dbPost.$id}`)
            }

         }
         else{
          const file = await service.fileUpload(data.image[0])
          if(file){
              const fileId = file.$id
              data.featuredImage =fileId
               const dbPost =  await service.createPost({
                ...data ,
                userId : userData.$id
               }
              )
              if(dbPost){
                navigate(`/post/${dbPost.$id}`);
              }
          }
         }
   }

   const slugTransform = useCallback((value)=>{
           if(value && typeof value === 'string' ){
            return value 
            .trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove any non-word characters except dashes and spaces
            .replace(/[\s]+/g, '-') // Replace spaces with dashes
            .replace(/[-]+/g, '-') // Replace multiple dashes with single dash
            .replace(/^-+/g, '') // Remove leading dashes
            .replace(/-+$/g, ''); // Remove trailing dashes
           }
           return ''
   },[])
        

         useEffect(()=>{
                const subscription = watch((value , {name})=>{
                if(name === 'title'){
                  setValue('slug' , slugTransform(value.title), {shouldValidate: true})
                  
                }
                })

                return ( )=>{
                   subscription.unsubscribe()
                }
         }, [watch , slugTransform , setValue])
  
         



  return (

<form onSubmit={handleSubmit(submit)}>
  <div className='flex flex-col p-5 bg-orange-400 rounded-lg '>
    <div className='ml-2  gap-2'>
      <div className='flex flex-col'>
         <label htmlFor="">Title</label>
        <Inputbox 
   label ='Title: '
   placeholder= "Title"
   className = "mb-4 outline-none p-2 pr-10 rounded-md hover:border hover:border-black"
   {...register('title' ,{required :true})}
   />
      </div>
     <div className='flex flex-col'>
       <label htmlFor="">Slug</label>
   <Inputbox 
    label = 'slug:'
    placeholder = 'slug'
    readOnly
    className= 'mb-4 outline-none hover:border hover:border-black'
    {...register('slug',{required:true})}
    onInput={(e)=>{
        setValue('slug' , slugTransform(e.currenTarget.value , {shouldValidate:true}))
    }}
   />
     </div>
  
    </div>
 
    
    <RTE
    label='content: '
    name='content'
    control={control}
    defaultValue={getValues('content')}
    />

<div>
  <div className='bg-gray-300 mt-5 flex p-3 gap-10'>
      <label htmlFor="" >Image</label>
<Inputbox 
   label =  'featuredImage :'
   type = 'file'
   accept = 'image/png, image/jpg , image/jpeg, iamge/gif'
   {...register('image',{required: !post})}
   />
   {post && (
    <div>
      <img src={service.getfilePreview(post.featuredImage)} alt={post.title} />
    </div>
   )}
  </div>


<label htmlFor="">Status</label>
<Select
options ={["active" ,"inactive"]}
label = 'status'
{...register('status',{required:true})}
className = "w-40 bg-gray-300 p-2"
/>

<Button type='submit' className='  p-2 m-auto rounded-sm w-[12.8rem] hover:bg-orange-500 mb-10 '>
  {post ? " update" :'Post'}
</Button>

</div>
  </div>
</form>
  )
}

