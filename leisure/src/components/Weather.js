import React, { useState, useEffect } from "react";
import cn from "classnames";
import "../styles/Weather.scss";
import axios from "axios";
require("dotenv").config();

const Weather = (props) => {
  const [info, setInfo] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const log = console.log;
  const obj = JSON.parse;
  const weatherInfo = "";
  //JSON 객체 parse 를 위한 JSON.parse메소드 obj로 지정

  // const callAPI = async () => {
  //   const response = await axios.get(
  //     `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst` +
  //       `?serviceKey=${API_KEY}`
  //   );
  //   setData(response.data);
  //   try {
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // 중기 육상예보
  //const request = require("request");
  const url = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst";
  let queryParams =
    "?" +
    encodeURIComponent("ServiceKey") +
    "=" +
    "wlrsBsl6RYx%2F%2FIN%2FCzWPqWsN%2BPoja2zo7GMgOCWfpTzua0%2FomtJZtRaNXBdss%2BhL1MvjLC1fvdZT58JllLSlJw%3D%3D";
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10");
  queryParams +=
    "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON");
  queryParams +=
    "&" + encodeURIComponent("stnId") + "=" + encodeURIComponent("108");
  queryParams +=
    "&" + encodeURIComponent("tmFc") + "=" + encodeURIComponent("202112050600");

  // request(
  //   {
  //     url: url + queryParams,
  //     method: "GET",
  //   },
  //   function (error, response, body) {
  //     // JSON 공공 데이터 예시 함수
  //     // console.log("error", error);
  //     // console.log("Status", response.resultCode);
  //     // console.log("Headers", JSON.stringify(response.headers));
  //     // console.log("Reponse received", body);
  //     console.log(body);
  //     const parse_body = obj("body");
  //   }
  // );
  axios
    .get(url + queryParams)
    .then(function (response) {
      console.log(response.data.response.body.items.item[0].wfSv);
      weatherInfo = response.data.response.body.items.item[0].wfSv;
    })
    .catch(function () {
      console.log("에러");
    });

  useEffect(() => {
    return () => log("clean up");
  });

  return (
    <div classnName={cn("Weather")}>
      <div> {weatherInfo} </div>
    </div>
  );
};

export default Weather;

//proxy 수정
