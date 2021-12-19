import axios from "axios";
import cn from "classnames";
import dotenv from "dotenv";
import React, { useEffect, useState, useMemo } from "react";
import "../styles/Weather.scss";
import moment from "moment";
import "moment/locale/ko";
import "../styles/Weather.scss";
dotenv.config({ path: "../.env", encoding: "utf8" });

const makeDate = (today) => {
  let date = [];

  let i = 0;
  for (i = 0; i <= 4; i++) {
    date[i] = today + (i + 3) + "오전";
  }

  for (i = 5; i <= 7; i++) {
    date[i] = today + (i + 3);
  }

  console.log(date);

  return date;
};

// NeweList에 해당함
const Weather = () => {
  //const [response, setResponse] = useState("기본값");
  const [data, setData] = useState(null);
  const [day, setDay] = useState(null);
  const [date, setDate] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const now = new Date();
  const today = now.getDate();

  const weatherDayJSON = {
    day3AM: today + 3 + "오전",
    day3PM: today + 3 + "오후",
    day4AM: today + 4 + "오전",
    day4PM: today + 4 + "오후",
    day5AM: today + 5 + "오전",
    day5PM: today + 5 + "오후",
    day6AM: today + 6 + "오전",
    day6PM: today + 6 + "오후",
    day7AM: today + 7 + "오전",
    day7PM: today + 7 + "오후",
    day8: today + 8,
    day9: today + 9,
    day10: today + 10,
  };

  const calltest = useEffect(() => {
    makeDate(today);
    <h1>테스팅</h1>;
  }, []);

  const nowTime = moment().format("HH");
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
        setWeatherData(null);
        const response = await axios.get(seturl + queryParams);

        // setWeatherData(
        //   JSON.stringify(
        //     response.data.response.body.items.item[0].regId,
        //     function (key, value) {
        //       if (typeof value == "string") {
        //         return value;
        //       } else {
        //         return value;
        //       }
        //     },
        //     5
        //   )
        // );

        setWeatherData(
          JSON.stringify(response.data.response.body.items.item[0])
        );

        setData(JSON.stringify(response.data.response.body.items.item[0]));
        const test = response.data.response.body.items.item[0];

        const dataInfo = ({ wf3Am, rnSt3Am }) => {
          setDay(`${wf3Am}, ${rnSt3Am}`);
        };

        dataInfo(test);
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

  return (
    <div className={cn("Weather")}>
      <h1>테스트</h1>
      <div className={cn("WeatherData")}>{day}</div>
      <div className={cn("WeatherData")}>{calltest}</div>
    </div>
  );
};

export default Weather;
