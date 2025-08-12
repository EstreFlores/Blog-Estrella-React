import React from 'react'
import { Form } from 'react-router-dom'

const BlogCreate = () => {
  return (
    <div className='container mx-auto p-3'>
      <h1 className='text-6xl font-bold text-white mb-5'>Crear nuevo post</h1>
      <Form method='post' className='text-white'>
        
        <div className='flex flex-col'>
          <label className='font-bold' htmlFor='title'>titulo</label>
          <input
            className='bg-gray-900 px-2 py-1 mt-2 rounded-md outline-none'
            id='title'
            name='title'
            type='text'
          />
        </div>

        <div className='flex flex-col'>
          <label className='font-bold' htmlFor='description'>descripcion</label>
          <input
            className='bg-gray-900 px-2 py-1 mt-2 rounded-md outline-none'
            id='description'
            name='description'
            type='text'
          />
        </div>

        <div className='flex flex-col'>
          <label className='font-bold' htmlFor='content'>contenido</label>
          <textarea
            className='bg-gray-900 px-2 py-1 mt-2 rounded-md outline-none'
            id='content'
            name='content'
          />
        </div>

        <div className='flex flex-col'>
          <label className='font-bold' htmlFor='image'>imagen</label>
          <input
            className='bg-gray-900 px-2 py-1 mt-2 rounded-md outline-none'
            type='file'
            id='image'
            name='image'
          />
        </div>

        <button
          className='bg-gray-900 px-2 py-1 mt-3 rounded-md'
          type='submit'
        >
          Crear
        </button>
      </Form>
    </div>
  )
}

export default BlogCreate