import React from "react";
import styled from "styled-components";
import cn from "classnames";
import { Link } from "react-router-dom";

const Logo = () => {
  const onclick = () => {
    <Link to="" />;
  };

  return (
    <StyledLink to="/">
      <StyledLogo>ColorPaper</StyledLogo>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const StyledLogo = styled.span`
  height: 30px;
  font-size: 5.2vh;
  font-family: "Roboto Bold";
  color: white;
  border-radius: 2px;
  background-color: rgb(40, 91, 121);
  font-weight: 1500;
  justify-content: center;
  line-height: 70px;
  position: relative;
  text-align: center;
  left: 43%;
  border-bottom: 6px solid rgb(255, 173, 173);
  cursor: pointer;
`;

export default Logo;
