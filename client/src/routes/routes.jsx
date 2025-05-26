

import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import MainLayoutes from '../layouts/MainLayoutes'
import Home from '../page/home/Home';


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
        
    }



])

export default Router;