/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";
import "../styles/Map.scss";

const { kakao } = window;

//카카오 지도 설정 함수
const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.8514, 126.734086),

      level: 13,
    };

    let map = new window.kakao.maps.Map(container, options);

    // 지도 더블클릭 막아야됨
    //지도 줌, 드래그 잠금 설정
    // map.setDraggable(false);
    map.setZoomable(false);

    //지도 크기 동적으로 조절
    // const resizeMap = () => {
    //   var mapContainer = document.getElementById("map");
    //   mapContainer.style.width = "340px";
    //   mapContainer.style.height = "650px";
    // };

    console.log("loading kakaomap");
  }, []);

  return (
    <div className={cn("Map")}>
      <div className={cn("MapContainer")} id="map"></div>
    </div>
  );
};

export default Map;

//지도 컴포넌트 지도 API사용해서 지도만 관리함.

//지도 컴포넌트 실행시 문제점.
//index.html에 APPeky 입력되어 있는지 확인.
//
