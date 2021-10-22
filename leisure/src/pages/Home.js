import React, { useState } from "react";
import "../styles/Home.scss";
import cn from "classnames";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import ProgressBar from "../components/ProgressBar";
import Festival from "../components/Festival";
import SidebarMenu from "../components/SidebarMenu";
import Logo from "../components/Logo";

const Home = ({ username }) => {
  return (
    <div className={cn("Home")}>
      <ProgressBar />
      <div className={cn("MenuSection")}>
        <SidebarMenu />
        <Logo />
        <span>{username}</span>
      </div>
      <div className={cn("Head")}>
        <Header />
      </div>
      <div className={cn("Body")}>
        <Calendar />
      </div>
      <div className={cn("Festival")}>
        <Festival />
      </div>
    </div>
  );
};

export default Home;

/*  
프로젝트에서 현재 해결해야할 문제점들
1. 메뉴 상단 슬라이드 바 구현하기
2. 화면 축소시 Calendar 아이콘 줄 밀림 현상 해결
3. 홈페이지에서 아래로 이동시 위로 올라가는 버튼 생성
4. input에서 입력버튼시 자동으로 focus input으로 이동하도록 설정
*/
