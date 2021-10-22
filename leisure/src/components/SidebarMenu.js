import cn from "classnames";
import { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/SidebarMenu.scss";


const SidebarMenu = () => {
  const [showNav, setShowNav] = useState(false);
  const CloseButton = useRef(null);
  const OpenButton = useRef(null);

  return (
    <div className="SidebarMenu">
      <div className="SidebarMenuSection">
        <GiHamburgerMenu
          className={cn("SidebarMenuButton")}
          onClick={() => setShowNav(!showNav)}
          showNav={showNav}
          ref={OpenButton}
        />
        <div className={cn(showNav ? "sidebar active" : "sidebar")}>
          <IoMdClose
            className={cn("SidebarMenu_CloseButton")}
            ref={CloseButton}
            shownav={showNav}
            onClick={() => setShowNav(!showNav)}
          />
          <ul className={cn("Hide_SidebarMenuUL")}>
            <li className={cn("SidebarMenulist")}>
              <Link className={cn("SidebarMenuLink")} to="/Login">
                Login/Join
              </Link>
            </li>
            <li className={cn("SidebarMenulist")}>
              <Link className={cn("SidebarMenuLink")} to="/">
                Home
              </Link>
            </li>
            <li className={cn("SidebarMenulist")}>
              <Link className={cn("SidebarMenuLink")} to="/Map">
                Map
              </Link>
            </li>
            <li className={cn("SidebarMenulist")}>
              <Link className={cn("SidebarMenuLink")} to="/Bug">
                Bug
              </Link>
            </li>
            <li className={cn("SidebarMenulist")}>
              <Link className={cn("SidebarMenuLink")} to="/Notice">
                Notice
              </Link>
            </li>
            <li className={cn("SidebarMenulist")}>
              <Link className={cn("SidebarMenuLink")} to="/About">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
