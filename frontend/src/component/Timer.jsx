
import React, { useEffect, useState } from "react";
import style from './Timer.module.css';

function Timer() {
  const [databaseTime, setDatabaseTime] = useState('');
  const [randomKey, setRandomKey] = useState('');
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);


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
    const date = new Date();
    setDatabaseTime(date) //테스트용으로 클릭하면 날짜값 들어가게함.

    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);

    var dateString = year + '-' + month + '-' + day;
    console.log(dateString);
    console.log("2022-04-02");

    //생성된 URL (key를 서버에서 검사할건지 프론트에서 할건지.)
    const createRandomKey = Math.random().toString(36).substr(2, 11);
    console.log(createRandomKey); //열람을 가능하게 할 userId를 명시해서 key를 발급해야 될듯.
    setRandomKey(createRandomKey)

    //위 두 데이터를 DB로 보내는 코드

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