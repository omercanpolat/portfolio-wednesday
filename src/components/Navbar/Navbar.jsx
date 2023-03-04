import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      {/* <div>NAVBAR</div> */}
      <div className="navbar">
        <NavLink
          to={"/"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "inherit",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "inherit",
          })}
        >
          About Me
        </NavLink>
        <NavLink
          to={"/projects"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "inherit",
          })}
        >
          My Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          style={({ isActive }) => ({
            color: isActive ? "#ff652f" : "inherit",
          })}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
