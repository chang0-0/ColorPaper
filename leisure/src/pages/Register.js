import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import "../styles/Register.scss";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SidebarMenu from "../components/SidebarMenu";
import Button from "../components/Button";
import styled from "styled-components";
import AuthTemplate from "../components/AuthTemplate";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div className={cn("Register")}>
      <ProgressBar />
      <div className={cn("RegisterBody")}>
        <SidebarMenu className={cn("LoginMenu")} />
        <div className={cn("LogoSection")}>
          <div className={cn("Logo")}>ColorPaper</div>
          <div className={cn("Logo_deco")} />
        </div>
        <section className={cn("RegisterSection")}>
          <AuthTemplate title="Register">
            <AuthForm isRegister />
          </AuthTemplate>
        </section>
        <div className={cn("copyright")}>
          Copyright(c) 2021 ColorPaper. All rights reserved
        </div>
      </div>
    </div>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: inline-block;
  width: 70%;
  z-index: 1000;
  left: 50%;
  top: 40%;
  position: fixed;
`;

export default Login;
