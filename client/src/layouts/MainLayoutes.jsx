


import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayoutes() {
  return (
    <div className='bg-black min-h-screen'>
        <Outlet/>


    </div>
  )
}

export default MainLayoutes