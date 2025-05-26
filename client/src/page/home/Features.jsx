

import React from 'react'
import Card from '../../components/shared/Card'

// import img1  from 'efficiency.png'
// import img2 from 'motivation.png'
// import img5 from  'search.png'
// import img6 from  'shipping.png'
// import img4 from 'shield.png'
// import img3 from 'dashboard.png'



function Features() {

    // all features data 

    const features =[

        {
            id:1,
            logo:'/efficiency.png',
            title:'Task Management',
            description:'Organize your daily tasks efficiently with intuitive lists and progress tracking.'

        },
        {
            id:2,
            logo:'/motivation.png',
            title:'Daily Motivation',
            description:'Get inspired with a fresh motivational quote every day to boost your productivity.',
        },

        {
            id:3,
            logo:'/search.png',
            title:'Clean Dashboard',
            description:'Visualize your progress and productivity metrics at a glance on a clean dashboard.'
        },
        {
            id:4,
            logo:'/shield.png',
            title:"Secure Data",
            description:'Your productivity data is securely stored and accessible only to you.',
        },
        {
            id:5,
            logo:'/dashboard.png',
            title:'User Friendly',
            description:'Designed with simplicity and ease of use in mind for a smooth experience.'
        },
        {
            id:6,
            logo:'/shipping.png',
            title:'Time Tracking',
            description:"Effortlessly track the time spent on tasks to better manage your schedule."
        }
    ]


  return (
    <div>
        <h1 className='text-white text-2xl text-center font-semibold mb-4'>Key Features</h1>

        {/* show data  */}

        <section className='grid  gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full p-3'>
            {
            features.map((item,key)=>(
               <div key={item.id}>
                <Card logo={item.logo} title={item.title} description={item.description}/>

               </div>

            ))
        }
        </section>




    </div>
  )
}

export default Features