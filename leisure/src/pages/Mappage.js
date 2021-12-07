import React from "react";
import cn from "classnames";
import ProgressBar from "../components/ProgressBar";
import Map from "../components/Map";
import "../styles/Mappage.scss";
import SidebarMenu from "../components/SidebarMenu";
import Weather from "../components/Weather";
import styled from "styled-components";
import Logo from "../components/Logo";

const Mappage = () => {
  return (
    <StyledMap className={cn("Mappage")}>
      <ProgressBar />
      <div className={cn("MappageHeader")}>
        <SidebarMenu className={cn("MappageMenu")} />
        <Logo />
        <span className={cn("MapHeadLine")} />
      </div>
      <div className={cn("MapBody")}>
        <div className={cn("MapSection")}>
          <Map className={cn("MappageInMap")} />
        </div>
        <div className={cn("WeatherSection")}></div>
        <Weather className={cn("MappageInWeather")} />
      </div>
    </StyledMap>
  );
};

const StyledMap = styled.div`
  //background: #ffffff;
  //background: linear-gradient(130deg, #ffdddd, rgb(0, 0, 0));
  background-color: #464646;
  opacity: 0.9;
  background-size: cover;
  margin: 3px 0 0 0;
  margin-top: 0;
  z-index: 0;
`;

export default Mappage;
