import React, { useCallback, useEffect } from 'react'
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
  <div>
   <Inputbox 
   label ='Title: '
   placeholder= "Title"
   className = "mb-4"
   {...register('title' ,{required :true})}
   />
   <Inputbox 
    label = 'slug:'
    placeholder = 'slug'
    className= 'mb-4'
    {...register('slug',{required:true})}
    onInput={(e)=>{
        setValue('slug' , slugTransform(e.currenTarget.value , {shouldValidate:true}))
    }}
   />
    
    <RTE
    label='content: '
    name='content'
    control={control}
    defaultValue={getValues('content')}
    />

<div>
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

{/* <select
label = "status"
className='w-40'
{...register('status', {required:true})}
>
  <option value="active">active</option>
  <option value="inactive">inactive</option>

</select> */}
<Select
options ={["active" ,"inactive"]}
label = 'status'
{...register('status',{required:true})}
className = "w-40"
/>

<Button type='submit'>
  {post ? " update" :'Post'}
</Button>

</div>
  </div>
</form>
  )
}

