import axios from "axios";
import cn from "classnames";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import "../styles/Weather.scss";
import moment from "moment";
import "moment/locale/ko";
import "../styles/Weather.scss";
dotenv.config({ path: "../.env", encoding: "utf8" });

// NeweList에 해당함
const Weather = () => {
  //const [response, setResponse] = useState("기본값");
  const [data, setData] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const nowTime = moment().format("HH");
  const setTmfc = "";
  let pm = "18";
  let am = "06";
  let time = "";

  if (nowTime >= parseInt(pm) || nowTime < parseInt(am)) {
    time = moment().format("YYYYMMDD") + pm + "00";
  } else {
    time = moment().format("YYYYMMDD") + am + "00";
  }

  const seturl =
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
    "&" + encodeURIComponent("tmFc") + "=" + encodeURIComponent(time);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const waether_callAPI = async () => {
      setLoading(true);
      try {
        setData(null);
        const response = await axios.get(seturl + queryParams);
        // .then((response) => {
        //   console.log(response.data.response.body.items.item);
        //   console.log("response 테스트 : " + response);
        // });
        console.log(response.data.response.body.items.item[0]);
        setData(JSON.stringify(response.data.response.body.items.item));
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    waether_callAPI();
  }, []);

  //대기 중
  if (loading) {
    return <div> 대 기 중</div>;
  }
  // 에러 발생했을 때
  // if (error) {
  //   return <div>에러 발생</div>;
  // }

  // axios
  //   .get(url + queryParams)
  //   .then(function (response) {
  //     console.log(response.data.response.body.items.item[0]);
  //     weatherInfo = response.data.response.body.items.item[0];
  //   })
  //   .catch(function () {
  //     console.log("에러");
  //   });
  //response값이 유효할때

  return (
    <div className={cn("Weather")}>
      <h1>테스트</h1>
      <div className={cn("WeatherData")}>{data}</div>
    </div>
  );
};

export default Weather;

//proxy 수정
