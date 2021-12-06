import axios from "axios";
import cn from "classnames";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
//import usePromise from "../lib/usePromise";
import "../styles/Weather.scss";
dotenv.config({ path: "../.env", encoding: "utf8" });

// NeweList에 해당함
const Weather = () => {
  const [data, setData] = useState("테스트");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
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

  // const [loading, response, error] = usePromise(() => {
  //   return axios.get(url + queryParams).then((response) => {
  //     console.log(response.data.response.body.items.item[0]);
  //     //weatherInfo = response.data.response.body.items.item[0];

  //     console.log(
  //       "response 테스트 : " + response.data.response.body.items.item[0]
  //     );
  //     setData(response.data.response.body.items.item[0]);
  //   });
  // }, []);

  // // 대기 중일 때
  // if (loading) {
  //   return null;
  // }
  // // 에러 발생했을 때
  // if (error) {
  //   return <div>에러 발생</div>;
  // }

  useEffect(() => {
    const waether_callAPI = async () => {
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
  //response값이 유효할때

  //const weather_API = setData(response.data);
  const result = setData("테스트");

  return <div className={cn("Weather")}>{data}</div>;
};

export default Weather;

//proxy 수정
