import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
 

const Home = () => {
 
  const navigate = useNavigate()
  return (
    <div className='container mx-auto p-3 grid place-content-center min-h-screen'>
      <h1 className='font-bold text-6xl text-white'>Estre blog</h1>
      <button onClick={() =>navigate("/blogs")} className='border border-gray-700 rounded-md  px-2 py-1 text-white 
      hover:bg-gray-700 mt-3'>Aprender algo nuevo</button>
    </div>
  )
}

export default Home