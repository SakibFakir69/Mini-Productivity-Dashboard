

import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import MainLayoutes from '../layouts/MainLayoutes'
import Home from '../page/home/Home';
import AuthLayoutes from '../layouts/AuthLayoutes';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import TaskBoard from '../components/taskboard/TaskBoard';


const Router = createBrowserRouter([

    {
        path:'/',
        element : <MainLayoutes/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/taskboard',
                element: <TaskBoard/>
            }
        ]
        
    },
    // auth

    {

        path:'/auth',
        element:<AuthLayoutes/>,
        children:[
            {
                path:'/auth/signin',
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