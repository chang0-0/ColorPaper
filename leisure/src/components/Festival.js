import React from "react";
import "../styles/Festival.scss";
import cn from "classnames";
import image01 from "../images/image01.jpg";
import image02 from "../images/image02.jpg";
import image03 from "../images/image03.jpg";
import image04 from "../images/image04.jpg";
import image05 from "../images/image05.jpg";
import image06 from "../images/image06.jpg";
import image07 from "../images/image07.jpg";
import image08 from "../images/image08.jpg";
import image09 from "../images/image09.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";

const Festival = (props) => {
  return (
    <div className={cn("Festival")}>
      <div className={cn("leisure_section")}>
        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image01})` }}
          >
            <span className={cn("leisure_text")}>멀리가는 드라이브</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image02})` }}
          >
            <span className={cn("leisure_text")}>조용한 전시회</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image03})` }}
          >
            <span className={cn("leisure_text")}>낭만의 카약</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image04})` }}
          >
            <span className={cn("leisure_text")}>감상의 트래킹</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image05})` }}
          >
            <span className={cn("leisure_text")}>혼자 즐기는 독서</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image06})` }}
          >
            <span className={cn("leisure_text")}>색다른 건축물</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image07})` }}
          >
            <span className={cn("leisure_text")}>속도감 레이스</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image08})` }}
          >
            <span className={cn("leisure_text")}>여유로운 카페</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image09})` }}
          >
            <span className={cn("leisure_text")}>다같이 즐기는 공연</span>
          </div>
        </div>
        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image10})` }}
          >
            <span className={cn("leisure_text")}>창작의 공방</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image11})` }}
          >
            <span className={cn("leisure_text")}>떠나는 공항</span>
          </div>
        </div>

        <div className={cn("leisure_item")}>
          <div
            className={cn("leisure_img")}
            style={{ backgroundImage: `url(${image12})` }}
          >
            <span className={cn("leisure_text")}>짜릿한 스케이트</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival;

// 부모 컨테이너 내부 자식 이미지 컨테이너 2개
// 이미지 background 설정
// 전체 구간 반복

/*
⭐문화 체육 관광부 데이터
웹 크롤링 OR API 사용 데이터 OR 메타데이터, 파일데이터 사용
데이터 인피니티 스크롤 적용. 
조건> 스크롤 프로그레스바 적용 안될시 (인피니티 스크롤 적용안함)
PlanB) 인피니티 스크롤 적용실패
> 페이지 버튼 적용해서 페이지 적용
이미지 컨테이너를 절반으로 처리
이미지 클릭시 행상 데이터 정보 제공 
<React Router> 사용.
이미지 상단 텍스트 적용 OR 이미지 내부 텍스트 적용
*/
