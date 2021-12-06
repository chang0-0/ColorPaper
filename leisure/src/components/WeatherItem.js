import React, { useState } from "react";
import cn from "classnames";

// NewsItem에 해당함
const WeatherItem = ({ weatherData }) => {
  const { body, url } = weatherData;

  return (
    <div className={cn("WeatherItem")}>
      {url}
      <div className={cn("WeatherContents")}>{body}</div>
    </div>
  );
};

export default WeatherItem;
