


import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Features from './Features'
import UserSection from './UserSection'

function Home() {
  return (
    <div className='p-2'>
     
        <Navbar/>
        <Banner/>
        <Features/>
        <UserSection/>

    </div>
  )
}

export default Home