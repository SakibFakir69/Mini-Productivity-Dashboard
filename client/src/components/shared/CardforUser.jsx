

import React from 'react'

function CardforUser({name,photo,message}) {
  return (
    <div className="bg-slate-950 min-h-[200px] hover:border-amber-200/20 duration-100 delay-100 p-2">

      <div className=" border-stone-200 p-4 flex flex-col justify-center items-center gap-y-2">

        <img src={photo} alt={name} className="h-10 w-10"/>

        <div className="flex justify-center items-center text-center flex-col mt-5 gap-y-3">
          <h3 className=" text-white">{message}</h3>
          <p className=" text-stone-200 text-xl font-semibold">{name}</p>
        </div>
      </div>
    </div>

  )
}

export default CardforUser