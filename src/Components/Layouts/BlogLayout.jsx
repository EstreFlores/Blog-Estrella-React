import React from 'react'
import {Outlet, Link} from 'react-router-dom'

function BlogLayout() {
  return (
    <div>
      <nav className='container mx-auto p-3 text-white flex justify-between items-center'>
        <div>
          <Link to ="/">Home</Link>
        </div>
        <div className='flex items-center gap-3'>
          <Link to ="/blogs">blogs</Link>
          <Link to ="/blogs/create">post create</Link>
        </div>
      </nav>
       <main className='container mx-auto p-3 text-white'>
        <Outlet/>

       </main>
    </div>
  )
}

export default BlogLayout