import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>StreetLed</h3>
      </Link>
      <div className="categories">
        <NavLink
          to={"/category/Escaladores"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Escaladores
        </NavLink>
        <NavLink
          to={"/category/Fuentes"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Fuentes
        </NavLink>
        <NavLink
          to={"/category/Lamparas"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Lamparas
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
