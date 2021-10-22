import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Button = ({ Buttonname, to, ...rest }) => {
  if (to) {
    <StyledLink Buttonname={Buttonname} {...rest} to={to}></StyledLink>;
  }

  return <StyledButton Buttonname={Buttonname} {...rest}></StyledButton>;
};

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const StyledButton = styled.button`
  background: none;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 60px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: #282828;
  cursor: pointer;
  transition-duration: 0.2s;
  padding: 10px 20px 10px 20px;
  margin-right: 30px;
  border: 0;
  outline: 0;

  &:hover {
    background: #353535;
    color: #fff;
  }

  ${(props) =>
    props.Buttonname === "register"
      ? css`
          margin-top: 30px;
        `
      : css``}
`;

export default Button;
