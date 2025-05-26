import React from "react";

function Card({ logo, title, description }) {
  return (
    <div className="bg-slate-950 min-h-[200px]  hover:bg-teal-300/10 duration-100 delay-100">

      <div className=" border-stone-200 p-4 flex flex-col justify-center items-center gap-y-2">

        <img src={logo} alt={title} className="h-10 w-10"/>

        <div className="flex justify-center items-center text-center flex-col mt-5 gap-y-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className=" text-stone-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
