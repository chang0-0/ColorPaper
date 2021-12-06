import axios from "axios";
import cn from "classnames";
import dotenv from "dotenv";
import React, { useEffect, useState, useCallback } from "react";
import "../styles/Weather.scss";
dotenv.config({ path: "../.env", encoding: "utf8" });

const Weather = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const log = console.log;
  //const obj = JSON.parse;
  const weatherInfo = "";
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

  useEffect(() => {
    const waether_callAPI = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url + queryParams).then((response) => {
          console.log(response.data.response.body.items.item[0]);
          //weatherInfo = response.data.response.body.items.item[0];

          console.log("response 테스트 : " + response);
          setData(response.data.response.body.items.item[0]);
        });
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

  //setData(weatherInfo);

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
    <div className={cn("Weather")}>
      <button onClick={waether_callAPI}>Call_API</button>
      데이터
      <div value={JSON.stringify(data, null, 2)}>{setData}</div>
    </div>
  );
};

export default Weather;

//proxy 수정
