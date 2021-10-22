import React, { useState, Component, useRef, useReducer } from "react";
import cn from "classnames";
import "../styles/Login.scss";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SidebarMenu from "../components/SidebarMenu";
import Button from "../components/Button";
import styled from "styled-components";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Login = ({ isLogin, isRegister }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const [state, dispatch] = useReducer(reducer, {
    username: "",
    pw: "",
  });

  //Ref 설정
  const inputID = useRef(null);
  const inputPW = useRef(null);

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      //input 필드 비었는지 검사해야됨
      onClick();
    }
  };

  const onClick = () => {
    //여기서 ID랑 PW 비었는지 체크 검사해야됨.
    //ref값을 사용할때는 current를 사용해야됨.
    if (inputID.current.value === "") {
      inputID.current.focus();
      alert("ID를 입력해주세요.");
    } else if (inputPW.current.value === "") {
      inputPW.current.focus();
      alert("비밀번호를 입력해주세요.");
    }
  };

  const inputChange = (e) => {
    dispatch(e.target.id);
  };

  return (
    <div className={cn("Login")}>
      <ProgressBar />
      <div className={cn("LoginBody")}>
        <SidebarMenu className={cn("LoginMenu")} />
        <div className={cn("LogoSection")}>
          <div className={cn("Logo")}>ColorPaper</div>
          <div className={cn("Logo_deco")} />
        </div>
        <div className={cn("LoginSector")}>
          <form>
            <input
              ref={inputID}
              label="Username"
              name="username"
              className={cn("inputID")}
              type="text"
              placeholder="Email Address"
              spellCheck={false}
              onKeyPress={onKeyPress}
              onChange={inputChange}
              value={dispatch.username}
            />
            <input
              ref={inputPW}
              label="Password"
              name="password"
              className={cn("inputPW")}
              type="password"
              placeholder="Password"
              onKeyPress={onKeyPress}
              onChange={inputChange}
              value={dispatch.pw}
            />
            {isRegister && (
              <input
                label="Confirm password"
                name="passwordConfirm"
                onChange={inputChange}
              />
            )}
          </form>
          <Button loginBt className={cn("login_bt")} onClick={onClick}>
            {isRegister ? "Register" : "SIGN IN"}
          </Button>
          <Button className={cn("join_bt")}>SIGN UP</Button>
        </div>
        <div className={cn("copyright")}>
          Copyright(c) 2021 ColorPaper. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Login;
