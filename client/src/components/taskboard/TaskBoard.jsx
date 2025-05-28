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
              className={`${path ==='/taskboard' ? "text-blue-500 flex items-center gap-x-1" : "text-white  flex items-center gap-x-1"}`}
              to={"/taskboard"}
            >
              <img src={'https://img.icons8.com/color-glass/48/task-completed--v2.png'} className="size-4"/>
              Task Board
            </NavLink>

            <NavLink className={({isActive})=> isActive ?"text-blue-500  flex items-center gap-x-1" : ' flex items-center gap-x-1 text-white'} to={"/taskboard/zenquotes"}>
              <img src={'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-motivation-work-from-home-flaticons-flat-flat-icons.png'} className="size-4"/>
              Motivational quote</NavLink>



            <NavLink className={({isActive})=> isActive ?"text-blue-500  flex items-center gap-x-1" : ' flex items-center gap-x-1 text-white'} to={'/taskboard/dashboad'}>
              <img src="https://img.icons8.com/color/48/dashboard-layout.png" className="size-4"/>
              Dashboard</NavLink>

            <NavLink className={"text-white font-semibold flex  gap-x-1 items-center"} to={'/'}>

            <img src="https://img.icons8.com/ultraviolet/40/home--v1.png" className="size-4"/>
            
            Home</NavLink>
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
