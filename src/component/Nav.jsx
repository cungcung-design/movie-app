import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 ">
        <div className="relative flex h-16 items-center justify-end me-15">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <NavLink to="/" className= "nav-link rounded-md px-3 py-2 text-sm font-medium text-white"> Homepage</NavLink>
              <NavLink to="/movies"className="nav-link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> View All Movies</NavLink>
              <NavLink to="/about"className="nav-link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> Our Blog</NavLink>
              <NavLink to="/contacts"className="nav-link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> Contacts</NavLink>
              <NavLink to="/login" className="nav-link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Login</NavLink>
              <NavLink to="/signup" className="nav-link rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> Signup </NavLink>
            </div>
          </div>
        </div>
      </nav>


    {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800">
      <div className="relative flex h-16 items-center justify-end me-15">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              }
            >
              Homepage
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              }
            >
              View All Movies
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              }
            >
              Our Blog
            </NavLink>

            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              }
            >
              Contacts
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              }
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav> */}
  
    </>
  );
};

export default Nav;