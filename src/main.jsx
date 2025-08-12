import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import BlogLayout from './Components/Layouts/BlogLayout';

import Home from './pages/home';
import Blogs from './pages/Blogs';
import BlogCreate from './pages/BlogCreate';
import BlogDetails from './pages/BlogDetails';
import Error from './pages/Error';

const router = createHashRouter ([
{path: "", element: <Home/>},


{
  path: "/blogs",
  element: <BlogLayout/>,
  children: [
    {
      path: "",
      element: <Blogs />,
      loader: async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return data;
      },
    },


    
{path: "create", element: <BlogCreate/> ,
action: async ({params,request,context}) => {
 const form = await request.formData()
 const res = Object.fromEntries(form)
 console.log(res);
  return true;
}
},




    {
      path: ":id",
      element: <BlogDetails />,
      loader: async ({ params }) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        const data = await res.json();
        return data;
      },
    },
  ],
},







{path:"*", element: <Error/>, errorElement:<Error/>}

])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);  

