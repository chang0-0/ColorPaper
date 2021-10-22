import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul className={cn("hideMenuUl2")}>
        <li className={cn("Menu2list")}>
          <Link className={cn("Menu2Link")} to="/Login">
            Login/Join
          </Link>
        </li>
        <li className={cn("Menu2list")}>
          <Link className={cn("Menu2Link")} to="/">
            Home
          </Link>
        </li>
        <li className={cn("Menu2list")}>
          <Link className={cn("Menu2Link")} to="/Map">
            Map
          </Link>
        </li>
        <li className={cn("Menu2list")}>
          <Link className={cn("Menu2Link")} to="/Bug">
            Bug
          </Link>
        </li>
        <li className={cn("Menu2list")}>
          <Link className={cn("Menu2Link")} to="/Notice">
            Notice
          </Link>
        </li>
        <li className={cn("Menu2list")}>
          <Link className={cn("Menu2Link")} to="/About">
            About us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
