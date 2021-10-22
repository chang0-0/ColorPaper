import React, { useState, useRef, useReducer } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import "../styles/Menu2.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Menu2 = ({ show }) => {
  const [showNav, setShowNav] = useState(false);
  const CloseButton = useRef(null);

  return (
    <div className={cn("Menu2")}>
      <header>
        <GiHamburgerMenu
          className="OpenButton"
          onClick={() => setShowNav(!showNav)}
          show={showNav}
        />
        {showNav ? (
          <body>
            <div className={show ? "sidenav active" : "sidenav"}>
              <ul className={cn("hideMenuUl")}>
                <li className={cn("Menulist")}>
                  <Link className={cn("MenuLink")} to="/Login">
                    Login/Join
                  </Link>
                </li>
                <li className={cn("Menulist")}>
                  <Link className={cn("MenuLink")} to="/">
                    Home
                  </Link>
                </li>
                <li className={cn("Menulist")}>
                  <Link className={cn("MenuLink")} to="/Map">
                    Map
                  </Link>
                </li>
                <li className={cn("Menulist")}>
                  <Link className={cn("MenuLink")} to="/Bug">
                    Bug
                  </Link>
                </li>
                <li className={cn("Menulist")}>
                  <Link className={cn("MenuLink")} to="/Notice">
                    Notice
                  </Link>
                </li>
                <li className={cn("Menulist")}>
                  <Link className={cn("MenuLink")} to="/About">
                    About us
                  </Link>
                </li>
              </ul>
              <IoMdClose className={cn("CloseButton2")} ref={CloseButton} />
            </div>
          </body>
        ) : (
          <IoMdClose className={cn("CloseButton2")} ref={CloseButton} />
        )}
      </header>
    </div>
  );
};

export default Menu2;
