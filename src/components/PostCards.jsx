import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
function PostCards({
    $id, 
    title,
    featuredImage,
}) {

    
  return (
    <Link to={`/post/${$id}`}>
    <div className=' bg-gray-100 min-h-40 rounded-xl p-4 hover:shadow-2xl hover:bg-gray-200'>
        <div className='w-32  justify-center mb-4'>
            <img src={service.getfilePreview(featuredImage)} alt={title}
            className='rounded-xl hover:border hover:border-white' />

        </div>
        <h2
        className='text-sm w-32 font-semibold'
        >{title}</h2>
    </div>
</Link>
  )
}

export default PostCards