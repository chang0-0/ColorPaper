import React, { useState, useEffect } from "react";
import cn from "classnames";
import "../styles/Weather.scss";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config({ path: "../.env", encoding: "utf8" });

const Weather = (props) => {
  //const [url, setUrl] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const log = console.log;
  //const obj = JSON.parse;
  const weatherInfo = [""];
  //JSON 객체 parse 를 위한 JSON.parse메소드 obj로 지정

  const url =
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst";
  let queryParams = "?" + encodeURIComponent("ServiceKey") + "=" + API_KEY;
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10");
  queryParams +=
    "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON");
  queryParams +=
    "&" + encodeURIComponent("regId") + "=" + encodeURIComponent("11B00000");
  queryParams +=
    "&" + encodeURIComponent("tmFc") + "=" + encodeURIComponent("202112060600");

  const weather = async () => {
    try {
      const response = await axios.get(url + queryParams).then((response) => {
        console.log(response.data.response.body.items.item[0]);
        weatherInfo = response.data.response.body.items.item[0];
        setData(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  // axios
  //   .get(url + queryParams)
  //   .then(function (response) {
  //     console.log(response.data.response.body.items.item[0]);
  //     weatherInfo = response.data.response.body.items.item[0];
  //   })
  //   .catch(function () {
  //     console.log("에러");
  //   });

  useEffect(() => {
    return () => log("clean up");
  });

  return (
    <div classnName={cn("Weather")}>
      <button onClick={weather}></button>
      <div value={JSON.stringify(data, null, 2)}>{data}</div>
    </div>
  );
};

export default Weather;

//proxy 수정
