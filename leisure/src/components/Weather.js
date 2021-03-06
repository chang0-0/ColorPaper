import axios from "axios";
import cn from "classnames";
import dotenv from "dotenv";
import moment from "moment";
import "moment/locale/ko";
import React, { useEffect, useState, useMemo } from "react";
import "../styles/Weather.scss";
dotenv.config({ path: "../.env", encoding: "utf8" });

const makeDate = (today) => {
  let date = [];

  // 해당 월의 마지막 일 구하기.
  const time = new Date();
  let month = time.getMonth() + 1;
  let max_day = new Date(time.getFullYear(), month, 0).getDate();

  let i = 0;
  let temp = 0;
  for (i = 0; i <= 4; i++) {
    temp = today + (i + 3);

    if (temp > max_day) {
      temp = temp - max_day;
    }

    date[i] = temp + "일  오전";
  }

  for (i = 5; i <= 7; i++) {
    temp = today + (i + 3);

    if (temp > max_day) {
      temp = temp - max_day;
    }

    date[i] = temp + "일";
  }

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

  const dateTest = useMemo(() => makeDate(today), [today]);

  // 현재시간.
  const nowTime = moment().format("HH");
  let pm = "18";
  let am = "06";
  let ymd = moment().format("YYYYMMDD");
  let time = parseInt(nowTime);

  // 0시에서 06시 사이 일경우 전날의 18시를 기준으로 함.
  if (nowTime >= 0 && nowTime < 6) {
    let yesterday = new Date(now.setDate(now.getDate() - 1)); // 어제
    yesterday = moment(yesterday).format("YYYYMMDD");
    time = yesterday;
  } else if (nowTime >= parseInt(pm) || nowTime < parseInt(am)) {
    time = ymd + pm + "00";
  } else {
    time = ymd + am + "00";
  }

  // 다음날 기준을 06시를 기준으로
  // 24시간이 넘어가도 전날 18시의 데이터를 기준으로 변경
  console.log(time);

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
        // 오후는 추후에 따로 추출예정
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
