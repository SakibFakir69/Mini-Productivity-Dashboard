import React from "react";
import NavbarTaskboard from "../navbar/NavbarTaskboard";

function TaskBoard() {
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
          className="text-white min-h-screen bg-yellow-200 w-64
        left-0
        top-0

  
        
        -translate-x-64 md:translate-x-0 transition-transform duration-300"
        >
          <li>task board</li>
          <li>Motivational quote</li>
          <li>dashboard</li>
          <li>profile</li>
        </aside>


        {/* outlet */}

        <aside>
            <h1 className="text-white">Outlet</h1>
        </aside>


      </section>
    </div>
  );
}

export default TaskBoard;
