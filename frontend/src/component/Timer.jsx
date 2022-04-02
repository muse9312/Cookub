
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import style from './Timer.module.css';

function Timer() {
  const [databaseTime, setDatabaseTime] = useState('');
  const [randomKey, setRandomKey] = useState('');
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);

  const cookies = new Cookies();


  useEffect(() => {
    //DB에 저장된 키와 생성된 날짜를 가져와야함.
    // const database = '2022-3-29'  //일단 이거 넣어 놓음.
    const database = databaseTime

    if (database === '') { //DB에서 가져오면 날짜가 있는지 없는지 확인.
      setDatabaseTime('')
    } else {
      const date = new Date(database);
      date.setDate(date.getDate() + 6);//7일 후 (타임스탬프)
      const end = date.getTime();
      const today = new Date(); //페이지에 들어온 시간
      const result = end - today.getTime() //(DB 저장된 시간 + 7일후) - (페이지에 들어온 시간) = 소멸까지 남은시간

      if (result < 0) { //설정일로 부터 7일이 지났는지 확인.
        setDay(0)
        setHour(0)
      } else {
        const remain_day = Math.ceil(result / (1000 * 60 * 60 * 24)); //변환 
        const remain_hour = Math.ceil((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setDay(remain_day)
        setHour(remain_hour)
      }
    }
  })

  const createNowTime = () => { //URL 생성 이벤트 처리
    //URL이 생성된 날짜
    const userId = cookies.get('userId')
    axios
    .post(`http://localhost:8080/url/${userId}`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setRandomKey(res.data)
    })
  }

  const deleteTime = () => { //기능종료 이벤트 처리
    if (window.confirm("종료하시면 더 이상 주소가 유효하지 않습니다.")) {
      alert("주소가 제거 됐습니다.")
      window.location.reload();
      //여기에 DB에 주소를 지우는 기능구현

    }
  }

  return (
    <>
      <div className={style.wrapper}>
        {day === 0 && hour === 0 ? ( //남은 일수와 시간이 모두 0 이면 재생성 버튼을 보여줌.
          <button onClick={() => { createNowTime() }}>버튼을 누르면 URL이 생성됩니다</button>
        ) : (
          <div>
            <h4>생성된 URL 주소 : http://localhost:3000/private/{randomKey}</h4>
            <h4>{`주소가 소멸되기 ${day}일 ${hour}시간 남았습니다.`}</h4>
            <button onClick={() => { deleteTime() }}>기능종료</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Timer;