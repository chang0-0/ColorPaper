import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import "../styles/Menu.scss";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

/*
⭐⭐수정해야할 부분
1. hideMenuSection 클릭시 scale 증가하는데 height만 증가하도록 해야됨
2. Icon 변화는 나타는데 중간에 짤림.
3. 리스트 부분 폰트랑 가로 세로 나열 고민해야됨.
4. hideMenuSection이랑 아이콘간의 격차가 발생하는데 거리 붙도록 해결해야됨.
*/

//버튼 스타일
const Button = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #74b9ff;
  :hover {
    background-color: #99c6f5;
  }
`;
const RedButton = styled(Button)`
  background-color: #f53e3e;
  :hover {
    background-color: #ff7268;
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn("MenuSection")}>
      {visible && (
        <div className={cn("hideMenuSection")}>
          <ul className={cn("hideMenuUl")}>
            <li className={cn("Menulist")}>
              <Link className={cn("MenuLink")} to="/Login">
                Login/Join
              </Link>
            </li>
            <li className={cn("Menulist")}>
              <Link className={cn("MenuLink")} to="/">
                Home
              </Link>
            </li>
            <li className={cn("Menulist")}>
              <Link className={cn("MenuLink")} to="/Map">
                Map
              </Link>
            </li>
            <li className={cn("Menulist")}>
              <Link className={cn("MenuLink")} to="/Bug">
                Bug
              </Link>
            </li>
            <li className={cn("Menulist")}>
              <Link className={cn("MenuLink")} to="/Notice">
                Notice
              </Link>
            </li>
            <li className={cn("Menulist")}>
              <Link className={cn("MenuLink")} to="/About">
                About us
              </Link>
            </li>
          </ul>
        </div>
      )}

      <button
        className={cn("MenuButton")}
        onClick={() => {
          setVisible(!visible);
        }}
        visible={visible}
      >
        {visible ? (
          <IoMdClose className={cn("closeButton")} />
        ) : (
          <FiMenu className={cn("openButton")} />
        )}
      </button>
    </div>
  );
};

export default Menu;

/*
7월 11일자 메뉴부분 수정해야됨.
SCSS 버튼 이전 onToggle open일때처럼 close 부분 &hover 적용안됨

아예 스타일 태그 적용해서 Button 을 새로만드는 방법도 괜찮을 것 같음 아래 링크
https://tigger.dev/entry/styled-components%EB%A1%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
styled component 적용도 한번 고려해봐야 될듯


메뉴가 나오면 다른 컨텐츠는 아무것도 안보이고 선택도 되지않고
드래그도 허용되지 않고 오로지 메뉴가 최상위 컨텐츠로
z-index 최고값이 되어야함.

         <button
        className={cn("MenuButton", { open })}
        onClick={onToggle}
        open={open} > 
*/
