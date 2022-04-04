import axios from "axios";
import React, { useEffect, useState } from "react";
import style from './PrivateURL.module.css';
import Cookies from 'universal-cookie';

const PrivateURL = ()=>{
 
  const [dataTest, setDataTest] = useState([]);
  const [createURLSwitch, setCreateURLSwitch] = useState(false);

  const cookies = new Cookies();
  


  useEffect(()=>{
    const userId = cookies.get('userId')
    //렌더링시 DB의 회원URL 리스트 가져오기
    axios
    .get(`http://localhost:8080/private/${userId}`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setDataTest(res.data)
    })
  },[])


  const deleteURL = () => { //url 제거 이벤트 처리
    if (window.confirm("종료하시면 더 이상 주소가 유효하지 않습니다.")) {
      alert("주소가 제거 됐습니다.")
      window.location.reload();
      //여기에 DB에 주소를 지우는 기능구현

    }
  }

  const createURL = () => { //url 생성 이벤트
    const userId = cookies.get('userId')
    axios.post(`http://localhost:8080/url/${userId}`)
    .then((res)=>{
      console.log(res);
    })
  }


  return(
    <>
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.cardSection}>

            {/* user가 가지고 있는 URL이 있으면 반복문 돌려 보여주기 */}
            <div className={style.URLcard}>
              <div className={style.textAndBtn}>
                <div className={style.cardText}>
                  <h4>URL의 사용처</h4>
                  <h5>{`발급됩 URL 주소 : https://localhost3000/private/`}</h5>
                  <h5>URL주소 소멸까지 남은시간 : ~~일 ~~시간 후에 URL이  소멸됩니다.</h5>
                </div>
                <button className={style.cardBtn} 
                        onClick={() => { deleteURL() }}>URL 제거
                </button>
              </div>
            </div>

            {/* 가장아래에 있는 New URL 발급버튼 */}
            <div className={style.URLcard}> 
              <div className={style.textAndBtn2}>
                {createURLSwitch === true 
                  ? (<>
                      <input 
                        placeholder="사용처를 입력해주세요"
                        type="text"
                        name="create_URL_name"></input>
                        <button onClick={() => { createURL() }}>
                        생성</button>
                    </>)
                  : (<button className={style.cardBtn2} onClick={() => { setCreateURLSwitch(true) }} >
                    새로운 URL 주소 생성
                 </button>)
                 }
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PrivateURL;
