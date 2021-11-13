import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import "../styles/Login.scss";
import ProgressBar from "../components/ProgressBar";
import SidebarMenu from "../components/SidebarMenu";
import styled from "styled-components";
import AuthTemplate from "../components/AuthTemplate";
import AuthForm from "../components/AuthForm";

const Login = ({ value }) => {
  return (
    <div className={cn("Login")}>
      <ProgressBar />
      <div className={cn("LoginBody")}>
        <SidebarMenu className={cn("LoginMenu")} />
        <div className={cn("LogoSection")}>
          <div className={cn("Logo")}>ColorPaper</div>
          <div className={cn("Logo_deco")} />
        </div>
        <section className={cn("LoginSection")}>
          <AuthTemplate title="Login">
            <AuthForm />
          </AuthTemplate>
        </section>
        {/* <h1>{value === null ? "코드 없음" : "코드 출력"}</h1> */}
        <h1>{value}</h1>
        <div className={cn("copyright")}>
          Copyright(c) 2021 ColorPaper. All rights reserved
        </div>
      </div>
    </div>
  );
};

const section = styled.section`
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
  margin-left: -120px;
`;

export default Login;
