import React from "react";
import "../styles/Header.scss";
import surf from "../images/Sunset-Surfing.jpg";
import cn from "classnames";

const Header = (props) => {
  return (
    <div className={cn("Festival")}>
      <div className={cn("HomeImageContainer")}>
        <div id="ImageLetter">A good day to surf</div>
        <img src={surf} alt={surf} id="Logo" />
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className={cn("logo")}>
<h2 id="Banner">ColorPaper</h2>
</div> */
}
