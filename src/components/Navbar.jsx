import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";

const Navbar = () => {
  return (
    <header className="header flex justify-center mt-2 rounded-2xl items-center !bg-white max-w-fit mx-auto px-8">
      <nav className="flex gap-8 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-icon-link ${isActive ? "text-blue-500" : "text-gray-700"}`
          }
          aria-label="Home"
        >
          <HomeIcon className="nav-icon" />
          <span className="nav-tooltip">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-icon-link ${isActive ? "text-blue-500" : "text-gray-700"}`
          }
          aria-label="About"
        >
          <PersonIcon className="nav-icon" />
          <span className="nav-tooltip">About</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `nav-icon-link ${isActive ? "text-blue-500" : "text-gray-700"}`
          }
          aria-label="Projects"
        >
          <WorkIcon className="nav-icon" />
          <span className="nav-tooltip">Projects</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-icon-link ${isActive ? "text-blue-500" : "text-gray-700"}`
          }
          aria-label="Contact"
        >
          <MailIcon className="nav-icon" />
          <span className="nav-tooltip">Contact</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
