

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Zenquotes() {

    const [ quotes , setquotes ] = useState([]);

    useEffect(()=>{
        axios.get('https://zenquotes.io/api/quotes')

    },[])


  return (
    <div>
        <h1 className='text-white text-center text-xl'>Zenquotes</h1>


        <section>


        </section>


    </div>
  )
}

export default Zenquotes