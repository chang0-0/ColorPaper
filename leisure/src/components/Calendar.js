import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import "../styles/Calendar.scss";
import Year from "react-live-clock";
import Month from "react-live-clock";
import { BiCalendar } from "react-icons/bi";
import cn from "classnames";

//오늘 기준으로 이번달의 마지막 날까지 출력하기위한 반복 함수
const getAlldate = (today, lastday) => {
  let dates = [];

  dates[0] = today;
  for (let i = 1; i <= 6; i++) {
    today++;
    //마지막 날보다 날짜가 클경우 today를 1로 초기화.
    if (today > lastday) {
      today = 1;
      dates[i] = today;
    }
    //일반 경우 그냥 날짜 추가
    else {
      dates[i] = today;
    }
  }

  return dates;
};

//요일 표시 평일 검정색, 토요일 파란색, 일요일 빨간색
const getAllweak = (todayWeak) => {
  let strWeak = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weaklist = [];

  //첫번째 오늘 날짜 적용

  weaklist[0] = strWeak[todayWeak];

  for (let i = 1; i <= 6; i++) {
    todayWeak++;
    if (todayWeak > 6) {
      todayWeak = 0;
      weaklist[i] = strWeak[todayWeak];
    } else {
      weaklist[i] = strWeak[todayWeak];
    }
  }

  return weaklist;
};

/* 
날짜가 변하는 달력 생성. 
조건은 7개의 날짜만 보여야하고, 
달이 넘어갈 경우 1부터 다시시작
처음은 무조건 오늘 날짜 기준.
해결: today와 lastday를 비교해서 today가 lastday를 넘길경우
today를 다시 1로 초기화해서 기존의 dates 배열에서부터 today값을 증가하여 추가함.
*/

const Calendar = (props) => {
  //변수 생성 오늘과, 이번달의 마지막 날부터 게산
  //const [today, setToday] = useState(now.getDate());
  const now = new Date();
  const todayWeak = now.getDay();
  const today = now.getDate();
  const lastday = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  const [daylist, setDaylist] = useState([]);
  const [weaklist, setWeaklist] = useState([]);
  //함수형 컴포넌트라서 리렌더링 될때마다 계속 배열에 추가됨.
  //오늘을 배열을 저장하는 함수 (한번만 저장되기 위해서 useCallback()을 사용.)

  /*
  useCallback: 첫번째 파라미터 생성하고싶은 함수를 넣고, 두 번째 파라미터에는 
  배열을 넣으면 된다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지
  명시해야 한다.
  비어있는 배열[]을 넣게되면 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용하게 되며,
  list가 있을경우 새로운 항목이 추가될 때 새로 만들어진 함수를 사용하게 된다.
  */
  const getList = useCallback(() => {
    setDaylist(daylist.concat(today));
  }, [today, daylist]);

  //전체날의 배열을 한번만 저장해서 실행함.
  const Alldate = useMemo(() => getAlldate(today, lastday), [daylist]);
  const Allweak = useMemo(() => getAllweak(todayWeak), [weaklist]);

  //⭐날짜를 출력할때 요일과 일자를 같이 표시하기위해서
  //객체로 만들어서 분해할당 표현. 함수를 실행해서 list를 만들어낸후 객체로 변환.

  const CalendarDay = getAlldate(today, lastday);
  const CalendarWeak = getAllweak(todayWeak);

  /*⭐⭐날짜와 요일을 같이 표시하기위해서 만들어 놓은 객체
  날짜를 하나씩 출력해서 객체로 만들기위해서 함수를 실행시킨뒤
  분해로 하나씩 넣는 방법을 사용했음 ⭐⭐*/
  const CalendarObject = [
    { weak: CalendarWeak[0], day: CalendarDay[0] },
    { weak: CalendarWeak[1], day: CalendarDay[1] },

    { weak: CalendarWeak[2], day: CalendarDay[2] },
    { weak: CalendarWeak[3], day: CalendarDay[3] },
    { weak: CalendarWeak[4], day: CalendarDay[4] },
    { weak: CalendarWeak[5], day: CalendarDay[5] },
    { weak: CalendarWeak[6], day: CalendarDay[6] },
  ];

  useEffect(() => {
    return () => console.log("Clean up");
  });

  const Weak = useRef(null);

  return (
    <div className={cn("Calendar")}>
      <div className="Year-MonthList">
        <p>
          <span className={cn("Year")}>
            <Year
              id="Year"
              format={"YYYY"}
              //ticking={false}
              timezone={"KR/Pacific"}
            />
          </span>
          &nbsp;&nbsp;
          <span className={cn("Month")}>
            <Month
              format={"MMMM"} //ticking={false}
              timezone={"KR/Pacific"}
            />
          </span>
        </p>
      </div>
      <div
        className={cn("DayList")}
        onChange={getList} //ticking={false}
      >
        <div className={cn("daylistContainer")}>
          {CalendarObject.map((calendar, index) => (
            <div className={cn("daylistSector")}>
              <div
                className={cn(
                  "weak",
                  calendar.weak === "Sun" ? "Sun" : "weak",
                  calendar.weak === "Sat" ? "Sat" : "weak"
                )}
                ref={Weak}
              >
                {calendar.weak}
              </div>
              <div className={cn("day")}>{calendar.day}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn("CalendarIconContainer")}>
        <span className={cn("CalendarIconText")}>전체 보기</span>
        <BiCalendar className={cn("CalendarIcon")} />
      </div>
    </div>
  );
};

export default Calendar;

//DayList를 표시하는 타원의 크기가 현재 일정하지 않음
//수정 필요 글씨의 크기와 내용이 다르기 때문에 일어나는 현상이므로
//전체 크기를 고정적으로 할당해주면 변하지 않도록 만들수 있음.
//요일 마다 동적으로 변하는 CSS를 적용해줘야됨
