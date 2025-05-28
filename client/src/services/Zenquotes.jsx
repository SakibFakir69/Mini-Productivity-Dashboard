

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Zenquotes() {

    const [ quotes , setquotes ] = useState([]);

    const [ loading , setloading ] = useState(true);


    useEffect(()=>{
        axios.get('https://server-ruby-theta.vercel.app/api/quotes')
        .then((res)=>{
            console.log(res.data);
            setquotes(res.data);
            setloading(false);

        })
        .catch((error)=>{
            console.log(error.message)
        })

    },[])

    console.log(quotes);


  return (
    <div>
        <h1 className='text-white text-center text-xl mt-6 font-semibold'>Zenquotes <span className='text-green-500'>Zone</span></h1>


        {
            loading ? (<div className='w-full'>
                <span className="loading loading-spinner flex justify-center items-center mx-auto  text-white py-32 w-20 text-center"></span>
            </div>):
            (<section className='grid md:grid-cols-3 gap-4 p-4 '>

            {
                quotes.map((quote, key)=>(
                    <div key={key} className=' bg-slate-900 min-h-10 p-2 rounded shadow-2xl border border-teal-200/20 hover:bg-slate-900/10 transition delay-100'>
                        <h2 className='text-white font-medium'>{quote.a}</h2>
                        
                        <p className='text-stone-200'>{quote.q}</p>



                    </div>
                ))
            }


        </section>)
        }


    </div>
  )
}

export default Zenquotes