import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Blogs = () => {

  const data = useLoaderData()
  console.log(data);

  const Card = ({title, body, id}) => (
    <article className='bg-gray-700 rounded-lg overflow-hidden'>
          <Link to= {`/blogs/${id}`} >
            <figure className='aspect-video'>
              <img className='w-full' src="https://img-c.udemycdn.com/course/750x422/5206962_8bf4.jpg" alt="" />
            </figure>
            <div className='p-2'>
              <h1 className='text-white font-bold text-xl'>{title}</h1>
              <p className='text-gray-500'>{body}</p>
            </div>
           </Link>

        </article>
  );

  return (
    <div >
      <h1 className='text-white font-bold text-4xl'>Aprender algo nuevo </h1>
       <p className='text-gray-300 text-sm mb-3'>Con Estrella puedes aprender nuevas cosas, que es lo que quieres aprender??</p>
       <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3'>
        {data.map((item, index)=> <Card key={index} id={item.id} title={item.title} body={item.body} />)}
       </section>
    </div>
  )
}

export default Blogs