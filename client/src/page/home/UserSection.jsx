

import React from 'react'
import Card from '../../components/shared/Card'
import CardforUser from '../../components/shared/CardforUser'

function UserSection() {

    const userMessage=[


        {
            id:1,
            photo:'',
            name:'John Doe',
            message:'"This dashboard has completely transformed how I manage my day. Simple, effective, and motivating!"'
        },
        {
            id:2,
            photo:'',
            name:' Jane Appleseed',
            message:'"Setting and tracking goals has never been easier. The daily quotes are a fantastic bonus!"'
        },
        {
            id:3,
            photo:'',
            name:'Peter Miller',

            message:'"A clean and intuitive interface that helps me focus on what matters most. Highly recommended!"'
        },
        {
            id:4,
            photo:'',
            name:'- Lisa Smith',
            message:"Finally, a productivity tool that isn't overwhelming. It has everything I need without the clutter"

        }
    ]


  return (
    <div className='p-3 py-22'>
        <h2 className='text-white font-semibold text-2xl mb-3 text-center'>What Our Users Say</h2>


        <section className='grid md:grid-cols-2 gap-5 mt-10'>

            {
                userMessage.map((item,key)=>(
                    <div key={item.id}>

                        <CardforUser photo={item.photo} name={item.name} message={item.message}/>

                    </div>

                ))
            }
        </section>




    </div>
  )
}

export default UserSection