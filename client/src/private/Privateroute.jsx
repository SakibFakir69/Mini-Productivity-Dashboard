

import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

function Privateroute({children}) {

    const {user,loading} = useAuth();

    if(loading)
    {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user)
    {
        return children;
    }

  return <Navigate to={'/'}/>
}

export default Privateroute