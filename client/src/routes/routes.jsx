

import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import MainLayoutes from '../layouts/MainLayoutes'


const Router = createBrowserRouter([

    {
        path:'/',
        element : <MainLayoutes/>
        
    }



])