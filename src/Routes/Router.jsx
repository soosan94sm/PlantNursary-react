import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/signup'
import Home from '../Pages/Home'

const Router = createBrowserRouter([
{
    path: '/signin',
    element: <Login />
},
{
    path: '/signup',
    element: <Signup />  
},
{path: '/', element: <Home />},
])

export default Router