

import React from 'react'

function CardforUser({name,photo,message}) {
  return (
    <div className="bg-slate-950 min-h-[200px]  p-2 hover:border hover:border-green-400/40 rounded duration-200 delay-100 shadow-xl">

      <div className=" border-stone-200 p-4 flex flex-col justify-center items-center gap-y-2">

        <img src={photo} alt={name} className="h-14 w-15 rounded-full "/>

        <div className="flex justify-center items-center text-center flex-col mt-5 gap-y-3">
          <h3 className=" text-stone-400">{message}</h3>
          <p className=" text-stone-200 text-xl font-semibold">{name}</p>
        </div>
      </div>
    </div>

  )
}

export default CardforUser