

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Zenquotes() {

    const [ quotes , setquotes ] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/quotes')
        .then((res)=>{
            console.log(res.data);
            setquotes(res.data);
        })
        .catch((error)=>{
            console.log(error.message)
        })

    },[])

    console.log(quotes);


  return (
    <div>
        <h1 className='text-white text-center text-xl'>Zenquotes</h1>


        <section>


        </section>


    </div>
  )
}

export default Zenquotes