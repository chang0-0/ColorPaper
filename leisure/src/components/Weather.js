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
    date[i] = today + (i + 3) + "일  오전";
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

  useEffect(() => {
    setDate(makeDate(today));
  }, []);

  const CalendarObject = [
    { day: date[0] },
    { day: date[1] },
    { day: date[2] },
    { day: date[3] },
    { day: date[4] },
    { day: date[5] },
    { day: date[6] },
    { day: date[7] },
  ];

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
      <div className={cn("WeatherData")}>
        {CalendarObject.map((calendar, index) => (
          <div className={cn("WeatherDayList")}>
            <div>{calendar.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
