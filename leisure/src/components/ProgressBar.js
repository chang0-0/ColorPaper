import React, { useEffect, useState } from "react";
import "../styles/ProgressBar.scss";

//함수형 컴포넌트에서 {this.props.title}을 똑같이 사용할수 없음
//render()함수를 사용하지 않을[뿐더러 this. 키워드를 사용할 필요가없음

const ProgressBar = (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return (
    <div className="progressBarContainer">
      <div
        id="progressBar"
        style={{ transform: `scale(${scroll}, 0.6)`, opacity: `${scroll}` }}
      />
    </div>
  );
};

export default ProgressBar;
