import axios from "axios";
import cn from "classnames";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import "../styles/Weather.scss";
import moment from "moment";
import "moment/locale/ko";
import "../styles/Weather.scss";
dotenv.config({ path: "../.env", encoding: "utf8" });

const makeDate = (today) => {
  let date = [];

  // 해당 월의 마지막 일 구하기.
  const time = new Date();
  console.log(time);

  let month = time.getMonth() + 1;
  console.log(month);

  let i = 3;
  let j = 0;
  for (i = 0; i <= 4; i++) {
    j = i;

    date[i] = today + j + "일  오전";
  }

  for (i = 5; i <= 7; i++) {
    date[i] = today + j + "일";
  }

  console.log("makeDate 함수 : " + date);

  // 날짜를 담은 배열을 전달하면 됨.
  return date;
};

// NeweList에 해당함
const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [date, setDate] = useState([]);
  const [condition, setCondition] = useState([]);
  const [weather, setWeather] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const now = new Date();
  const today = now.getDate();

  useEffect(() => {
    setDate(makeDate(today));
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

  useEffect(() => {
    const waether_callAPI = async () => {
      setLoading(true);
      try {
        setData(null);
        setCondition(null);
        setWeatherData(null);
        const response = await axios.get(seturl + queryParams);

        setWeatherData(
          JSON.stringify(response.data.response.body.items.item[0])
        );

        setData(JSON.stringify(response.data.response.body.items.item[0]));
        let test = response.data.response.body.items.item[0];

        // 오전만 추출
        const dataInfo = async ({
          wf3Am,
          wf4Am,
          wf5Am,
          wf6Am,
          wf7Am,
          wf8,
          wf9,
          wf10,
        }) => {
          test = `${wf3Am}, ${wf4Am}, ${wf5Am}, ${wf6Am}, ${wf7Am}, ${wf8} , ${wf9} , ${wf10}`;
          const temp = test.split(",");

          await setWeather(temp);
          setCondition(temp);
        };

        await dataInfo(test);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    waether_callAPI();
  }, []);

  // 대기 중
  if (loading) {
    return <div> 대 기 중</div>;
  }

  const CalendarObject = [
    { day: date[0], weather: condition[0] },
    { day: date[1], weather: condition[1] },
    { day: date[2], weather: condition[2] },
    { day: date[3], weather: condition[3] },
    { day: date[4], weather: condition[4] },
    { day: date[5], weather: condition[5] },
    { day: date[6], weather: condition[6] },
    { day: date[7], weather: condition[7] },
  ];

  return (
    <div className={cn("Weather")}>
      <div className={cn("WeatherData")}>
        <div className={cn("WeatherRegion")}> 지역 </div>
        {CalendarObject.map((calendar, index) => (
          <span className={cn("WeatherDayListSection")}>
            <div className={cn("WeatherDayList_Day")}>{calendar.day}</div>
            <div className={cn("WeatherDayList_Weather")}>
              {calendar.weather}
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Weather;
