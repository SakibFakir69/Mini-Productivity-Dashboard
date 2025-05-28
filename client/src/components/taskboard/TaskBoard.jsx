import React from "react";
import NavbarTaskboard from "../navbar/NavbarTaskboard";
import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TaskBoard() {
    const path = useLocation().pathname;
    console.log(path);
  // navbar

  // sidebar
  // task -> 3 coloum full devices

  return (
    <div>
      <header>
        <nav>
          <NavbarTaskboard />
        </nav>
      </header>

      <section className="relative flex ">
        {/* side bar */}

        <aside
          className="text-white min-h-screen bg-slate-950 w-64
          absolute md:relative
        left-0
        top-0

  
        
        -translate-x-64 md:translate-x-0 transition-transform duration-300"
        >
          <nav className="flex flex-col gap-y-6 p-4 ">

            <NavLink
              className={`${path ==='/taskboard' ? "text-blue-500" : "text-white"}`}
              to={"/taskboard"}
            >
              Task Board
            </NavLink>

            <NavLink className={({isActive})=> isActive ?"text-blue-500" : 'text-white'} to={"/taskboard/zenquotes"}>Motivational quote</NavLink>
            <NavLink className={({isActive})=> isActive ?"text-blue-500" : 'text-white'} to={'/taskboard/dashboad'}>dashboard</NavLink>

            <NavLink className={({isActive})=> isActive ?"text-blue-500" : 'text-white'}>home</NavLink>
          </nav>
        </aside>

        {/* outlet */}

        <aside className=" w-full">
          <Outlet />
        </aside>
      </section>
    </div>
  );
}

export default TaskBoard;
