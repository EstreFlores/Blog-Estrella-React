import React from 'react'
import { useLoaderData } from 'react-router-dom'
const BlogDetails = () => {
 const data = useLoaderData()

  return (
    <div >
      <h1 className='text-5xl font-bold'>{data.title}</h1>
      <figure className='aspect-video my-5'>
        <img className='w-full rounded-lg' src="https://img-c.udemycdn.com/course/750x422/5206962_8bf4.jpg" alt="" />
      </figure>
      <div>
        <p className='mb-2'>{data.body}</p>
        
      </div>
    </div>
  )
}

export default BlogDetails