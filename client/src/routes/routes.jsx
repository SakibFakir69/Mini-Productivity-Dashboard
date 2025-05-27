

import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import MainLayoutes from '../layouts/MainLayoutes'
import Home from '../page/home/Home';
import AuthLayoutes from '../layouts/AuthLayoutes';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import TaskBoard from '../components/taskboard/TaskBoard';
import Privateroute from '../private/Privateroute';
import Task from '../page/Task';


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
                element:<Privateroute><TaskBoard/></Privateroute>,
                children:[
                    {
                        path:'/taskboard',
                        element:<Task/>
                    }
                ]
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

    },

    {
        path :"*",
        element: <h4 className='text-4xl flex justify-center items-center'>404</h4>
    }



])

export default Router;