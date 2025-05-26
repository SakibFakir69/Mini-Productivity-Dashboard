

import React from 'react'
import Card from '../../components/Card'

function Features() {

    const features =[

        {
            id:1,
            logo:'',
            title:'Task Management',
            description:'Organize your daily tasks efficiently with intuitive lists and progress tracking.'

        },
        {
            id:2,
            logo:'',
            title:'Daily Motivation',
            description:'Get inspired with a fresh motivational quote every day to boost your productivity.',
        },

        {
            id:3,
            logo:'',
            title:'Clean Dashboard',
            description:'Visualize your progress and productivity metrics at a glance on a clean dashboard.'
        },
        {
            id:4,
            logo:"",
            title:"Secure Data",
            description:'Your productivity data is securely stored and accessible only to you.',
        },
        {
            id:5,
            logo:'',
            title:'User Friendly',
            description:'Designed with simplicity and ease of use in mind for a smooth experience.'
        },
        {
            id:6,
            logo:'',
            title:'Time Tracking',
            description:"Effortlessly track the time spent on tasks to better manage your schedule."
        }
    ]


  return (
    <div>
        <h1 className='text-white text-xl text-center'>Features</h1>

        {
            features.map((item,key)=>(
               <div key={item.id}>
                <Card logo={item.logo} title={item.title} description={item.description}/>

               </div>

            ))
        }




    </div>
  )
}

export default Features