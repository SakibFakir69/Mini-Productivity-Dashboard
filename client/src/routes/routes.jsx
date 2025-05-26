import { useForm, SubmitHandler } from "react-hook-form"

import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import MainLayoutes from '../layouts/MainLayoutes'
import Home from '../page/home/Home';
import AuthLayoutes from '../layouts/AuthLayoutes';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';


const Router = createBrowserRouter([

    {
        path:'/',
        element : <MainLayoutes/>,
        children:[
            {
                path:'/',
                element: <Home/>
            }
        ]
        
    },
    // auth

    {

        path:'/auth',
        element:<AuthLayoutes/>,
        children:[
            {
                path:'/auth/siginin',
                element:<Signin/>
            },
            {
                path:'/auth/signup',
                element:<Signup/>
            }
        ]

    }



])

export default Router;