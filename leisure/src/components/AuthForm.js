import React, { useState, useRef, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styled, { css } from "styled-components";
import Button from "./Button";
import LabelInput from "./LabelInput";
import { customAlphabet } from "nanoid";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const nanoid = customAlphabet("01234567899abcedf", 8);

function AuthForm({ isRegister, Buttonname, code }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState("");
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    code: "",
  });

  // 기존에 원래 쓰던 onChange 지금은 사용X
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, code: nanoid() }));
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    username: "",
    pw: "",
  });

  //Ref 설정
  const inputID = useRef(null);
  const inputPW = useRef(null);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      //input 필드 비었는지 검사해야됨b
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

  // onSubmit이라는 함수를 만들고, 이를 form의 onSubmit으로 설정했습니다.
  // 이 함수가 호출되면 props로 받아 온 onInsert 함수에 현재 value 값을 파라미터로 넣어서 호출하고,
  // 현재 value 값을 초기화 합니다.
  // 추가로 onSubmit 이벤트는 브라우저를 새로고침시킵니다. 이때 e.preventDefualt() 함수를 호출하면
  // 새로고침을 방지할 수 있습니다.

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Block className={cn("AuthForm")}>
      <Form>
        <input
          title="register"
          ref={inputID}
          value={(dispatch.username, form.code)}
          label="Username"
          name="username"
          className={cn("inputID")}
          type="text"
          spellCheck={false}
          onSubmit={onSubmit}
          onKeyPress={onKeyPress}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Email Address"
        />
        <input
          ref={inputPW}
          label="Password"
          name="password"
          className={cn("inputPW")}
          type="password"
          placeholder="Password"
          onSubmit={(e) => e.preventDefualt()}
          onKeyPress={onKeyPress}
          onChange={inputChange}
          value={dispatch.pw}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isRegister && (
          <LabelInput
            label="Confirm password"
            name="passwordConfirm"
            onChange={onChange}
          />
        )}

        <StyleButton
          Buttonname={
            isRegister ? (Buttonname = "register") : (Buttonname = "login")
          }
        >
          {isRegister ? "Register" : "Login"}
        </StyleButton>
        <Link to={isRegister ? "/login" : "/register"}>
          {isRegister ? (
            <StyleButton Buttonname={"register"} className={cn("lg_bt")}>
              Login
            </StyleButton>
          ) : (
            <StyleButton className={cn("rg_bt")}>Register</StyleButton>
          )}
        </Link>
      </Form>
    </Block>
  );
}

const Block = styled.div``;

const StyleButton = styled(Button)``;

const Form = styled.form`
  input {
    border: none;
    background: none;
    border-bottom: 2.5px solid rgb(78, 78, 78);
    line-height: 40px;
    font-size: 18px;
    padding: 10px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    width: 520px;

    &:focus::-webkit-input-placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: rgb(255, 255, 255);
    }
  }
`;

export default AuthForm;
