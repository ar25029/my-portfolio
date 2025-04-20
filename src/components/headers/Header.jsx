import React, { useState } from "react";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { Icons } from "../../shared";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleManu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between mb-10">
      <div className="flex items-center gap-4">
        <span className="w-10 h-10 rounded-full bg-orange-400"></span>
        <h2 className="text-2xl font-serif md:font-bold block md:hidden">AR</h2>
        <h2 className="text-3xl font-serif md:font-bold hidden md:block">
          Abdur Rahman
        </h2>
        <h4 className="text-sm md:text-xl font-mono">Software Engineer</h4>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <button className="border-r border-gray-400 px-3 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-amber-600" : "text-black"}`
            }
          >
            My Portfolio
          </NavLink>
        </button>
        <button className="border-r border-gray-400 px-3 hover:text-amber-600 duration-200 ">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${isActive ? "text-amber-600" : "text-black"}`
            }
          >
            Resume
          </NavLink>
        </button>
        <button className="border-r border-gray-400 px-3 hover:text-amber-600 duration-200">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${isActive ? "text-amber-600" : "text-black"}`
            }
          >
            Projects
          </NavLink>
        </button>
        <button className="hover:text-amber-600 duration-200">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-amber-600" : "text-black"}`
            }
          >
            Contact
          </NavLink>
        </button>
      </div>

      {/* hamburger icon */}
      <div className="md:hidden self-center">
        <button onClick={toggleManu}>
          <Icons icon={faBars} className={"text-3xl"} />
        </button>
      </div>
      {/* mpbile menu */}
      {menuOpen && (
        <div>
          <div className="absolute text-center w-full h-full left-0 top-0 bg-white border shodow-md p-4 flex flex-col gap-2 md:hidden z-10">
            <div onClick={toggleManu}>
              <Icons icon={faClose} className={"text-2xl"} />
            </div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1aX_zJcrWOPAtwqb5YiL6E__VykDGH96q/view?usp=sharing"
              onClick={toggleManu}
            >
              Resume
            </a>
            <a href="#project" onClick={toggleManu}>
              Projects
            </a>
            <a href="#contact" onClick={toggleManu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
