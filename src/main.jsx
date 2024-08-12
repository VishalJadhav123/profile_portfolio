import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/user.jsx'
import Education from './components/EDUCATION.jsx'



// const router=createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home></Home>
//       },
//       {
//         path:"/about",
//         element:<About></About>
//       },
//       {
//         path:"/Contact",
//         element:<Contact></Contact>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}/>
      <Route path='about' element={<About></About>}/>
      <Route path='contact' element={<Contact></Contact>}/>
      <Route path='user/:id' element={<User></User>}/>
      <Route path='Education' element={<Education></Education>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
