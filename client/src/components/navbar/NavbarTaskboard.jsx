import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";

function NavbarTaskboard() {
  const { user, signOutHandel } = useAuth();
  console.log(user);

  const logout = () => {
    toast.success("Log out");
    signOutHandel();
  };

  const links = (
    <div className="flex gap-y-5 flex-col ">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white"
        }
        to={"/taskboard"}
      >
        Task Board
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white"
        }
        to={"/taskboard/zenquotes"}
      >
        Motivational quote
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white"
        }
        to={"/taskboard/dashboad"}
      >
        dashboard
      </NavLink>
    </div>
  );

  return (
    <div>
      <ToastContainer />
      <div className="navbar bg-slate-900 shadow-sm border border-teal-300/10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-stone-900 rounded z-1 w-52 p-2 shadow backdrop-blur-2xl"
            >
              {links}
            </ul>
          </div>
          <a className="flex  justify-center items-center text-xl">
            {" "}
            <img
              src={"https://img.icons8.com/color-glass/48/task.png"}
              className="md:size-10 size-6"
            />{" "}
            <Link to={'/'} className="hidden md:inline ml-2 text-white">
              Mini Productivity Dashboard
            </Link>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>

        <div className="navbar-end flex gap-x-2">
          

          {user ? (
            <div className="flex gap-x-4">
              <img src={user?.photoURL} className="h-10 w-10 rounded-full" />

              <button className="btn" onClick={logout}>
                Log out
              </button>
            </div>
          ) : (
            <div>
              <Link to={"/auth/signin"} className="btn btn-active">
                Log in{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarTaskboard;
