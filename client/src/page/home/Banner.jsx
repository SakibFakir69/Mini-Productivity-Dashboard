

import React from 'react'

function Banner() {
  return (
    <div className='w-full'>

        <section className='flex text-center md:py-56 py-20 flex-col'>

            <div className='p-6 flex justify-center items-center flex-col gap-y-2'>

                <h2 className='text-white text-6xl font-semibold'>Organize Your Day, Achieve Your Goals</h2>

                <p className='text-stone-300 font-medium'>
                    Your simple and powerful tool for managing tasks, setting goals, and staying motivated.
                </p>
            </div>

            {/* button */}
            <div className='flex justify-center gap-x-5'>

                <button className='p-3 px-10 rounded  bg-blue-600 font-medium text-white hover:bg-transparent duration-300 delay-200 hover:border-stone-300'>Get Started</button>

                <button className='p-3 px-10 rounded bg-transparent font-medium text-white border border-stone-400/50 hover:border-stone-300 delay-200 duration-300'>Learn More</button>
            </div>



        </section>


    </div>
  )
}

export default Banner