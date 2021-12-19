import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import cn from "classnames";
import Login2 from "./pages/Login";
import Map from "./pages/Mappage";
import Bug from "./pages/Bug";
import Notice from "./pages/Notice";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = (props) => {
  return (
    <div className={cn("App")}>
      <Route path="/" exact={true} component={Home} />
      <Route path="/Login" component={Login2} />
      <Route path="/Register" component={Register} />
      <Route path="/map" component={Map} />
      <Route path="/bug" component={Bug} />
      <Route path="/notice" component={Notice} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;

/*
    <div className={cn("App")}>
      <ProgressBar />
      <div className={cn("Head")}>
        <Menu className={cn("Menu")} />
        <Header />
      </div>
      <li>
        <Link to="/Login">Login/Join</Link>
      </li>
      <div className={cn("Body")}>
        <Calendar />
      </div>
      <div className={cn("Festival")}>
        <Festival />
      </div>

      <Route path="/login" component={Login} />
      <Route path="/Map" component={Map} />
      <Route path="/Notice" component={Notice} />
      <Route path="/Bug" component={Bug} />
      <Route path="/About" component={About} />
    </div>
*/

/*
<Menu>
햄버거 메뉴 적용
React icon 모듈 사용.

<Calendar>
날짜 출력 7일 기준으로 보여주기 margin-left 4rem 적용
날짜 오른쪽 버튼 생성 텍스트 애니메이션 적용
날짜는 중기 데이터 API 기준으로 적용
날짜 마우스 오버시 색상 변경 이벤트 적용
선택시 고정.

바디 부분 행사 정보 문화체육관광부 API 데이터
인피니티 스크롤 적용
*/
