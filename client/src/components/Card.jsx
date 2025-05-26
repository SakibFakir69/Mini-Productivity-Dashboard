


import React from 'react'

function Card({logo, title, description}) {
  return (
    <div>

        <div>
            <img src={logo}/>

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>



    </div>
  )
}

export default Card