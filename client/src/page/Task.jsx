

import React from 'react'

function Task() {
  return (
    <div className='w-full p-4 min-h-screen'>
        {/* here implement goal weekly and monthly */}

        <div className='flex p-2  justify-between'>

            <h3 className='text-xl font-semibold text-white'>Tasks</h3>


            <button className='btn'>Add Task</button>
        </div>

        <section className='grid grid-cols-2 gap-5'>

            <div >
                <h2 className='text-white font-xl font-semibold'>Weekly Task</h2>

                <div className='border border-white min-h-20'>
                    <p className='text-white'>hello this is my first task</p>
                </div>

            </div>


             <div>
                <h2 className='text-white font-xl font-semibold'>Monthly Task</h2>

                <div className='border border-white min-h-20'>
                    <p className='text-white'>hello this is my first task</p>
                </div>

            </div>




        </section>
        




    </div>
  )
}

export default Task