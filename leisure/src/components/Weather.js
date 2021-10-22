import React, { useMemo, useState, useEffect } from "react";
import cn from "classnames";
import "../styles/Weather.scss";
import axios from "axios";
require("dotenv").config();

const Weather = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState(null);
  const log = console.log;
  const obj = JSON.parse;
  //JSON 객체 parse 를 위한 JSON.parse메소드 obj로 지정

  const callAPI = async () => {
    const response = await axios.get(
      `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst` +
        `?serviceKey=${API_KEY}`
    );
    setData(response.data);
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const request = require("request");
  const url = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst";
  let queryParams =
    "?" + encodeURIComponent("ServiceKey") + `${API_KEY}`; /* Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10");
  queryParams +=
    "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON");
  queryParams +=
    "&" + encodeURIComponent("stnId") + "=" + encodeURIComponent("108");
  queryParams +=
    "&" + encodeURIComponent("tmFc") + "=" + encodeURIComponent("202110040600");

  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      // JSON 공공 데이터 예시 함수
      // console.log("error", error);
      // console.log("Status", response.resultCode);
      // console.log("Headers", JSON.stringify(response.headers));
      // console.log("Reponse received", body);
      const parse_body = obj("body");
    }
  );
  log(request);
  log(queryParams);

  useEffect(() => {
    return () => log("clean up");
  });

  return (
    <div classnName={cn("Weather")}>
      <div> {queryParams} </div>
    </div>
  );
};

export default Weather;

//proxy 수정
