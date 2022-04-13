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
    .get(`http://${process.env.REACT_APP_HOST}/url/list/${userId}`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setDataTest(res.data)
    })
  },[])


  const deleteURL = (index) => { //url 제거 이벤트 처리
    if (window.confirm("종료하시면 더 이상 주소가 유효하지 않습니다.")) {
      alert("주소가 제거 됐습니다.")
      //여기에 DB에 주소를 지우는 기능구현
      axios.delete(`http://${process.env.REACT_APP_HOST}/url/${dataTest[index].urlId}`)
      .then((res) => { console.log(res.data); })
      window.location.reload();
    }
  }

  const createURL = () => { //url 생성 이벤트
    const userId = cookies.get('userId')
    const val = {"purpose":document.querySelector('[name=create_URL_name]').value}
    axios.post(`http://${process.env.REACT_APP_HOST}/url/${userId}`,JSON.stringify(val),{
      headers: {
        "Content-Type": `application/json`,
      },
    })
    .then((res)=>{
      console.log(res);
      window.location.reload();
    })
  }

  const dateChange = (time) => {
    const date = new Date(time).toLocaleDateString().replace(/\./g,".");
    return date
  }


  return(
    <>
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.cardSection}>
            {dataTest.map((urlData,index)=>(
              //  user가 가지고 있는 URL이 있으면 반복문 돌려 보여주기 
            <div className={style.URLcard}>
              <div className={style.textAndBtn}>
                <div className={style.cardText}>
                  <h4>{`사용처 : ${urlData.purpose}`}</h4>
                  <h5>{`발급됩 URL 주소 : http://localhost:3000/private/${urlData.privateKey}`}</h5>
                  <h5>{`URL 주소 유효기간 : ${dateChange(urlData.lastDate)} 까지 유효`}</h5>
                </div>
                <button className={style.cardBtn} 
                        onClick={() => { deleteURL(index) }}>URL 제거
                </button>
              </div>
            </div>
            ))}
            

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
