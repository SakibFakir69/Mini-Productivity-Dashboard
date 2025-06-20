

import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='w-full'>

        <section className='flex text-center md:py-56 py-20 flex-col'>

            <div className='p-6 flex justify-center items-center flex-col gap-y-2'>

                <h2 className='text-white md:text-6xl font-semibold  text-4xl'>Organize Your Day, Achieve Your Goals</h2>

                <p className='text-stone-300 md:font-medium'>
                    Your simple and powerful tool for managing tasks, setting goals, and staying motivated.
                </p>
            </div>

            {/* button */}
            <div className='flex justify-center gap-x-5'>

                <Link to={'/taskboard'} className='p-3 px-10 rounded  bg-blue-600 font-medium text-white hover:bg-transparent duration-300 delay-200 hover:border-stone-300 cursor-pointer'>Get Started</Link>

                <a target='_blank' href='https://www.ntaskmanager.com/blog/task-management-skills/' className='p-3 px-10 rounded bg-transparent font-medium text-white border border-stone-400/50 hover:border-stone-300 delay-200 duration-300 cursor-pointer' >Learn More</a>
            </div>



        </section>


    </div>
  )
}

export default Banner