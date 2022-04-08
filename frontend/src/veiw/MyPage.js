import React, { useEffect, useState } from "react";
import style from './MyPage.module.css';
import Modal from './Modal.js'
import { Link } from "react-router-dom";
import noImg from '../assets/img/noimg.PNG';
import axios from "axios";
import Cookies from 'universal-cookie';
import Navigation from '../component/Navigation'
import PrivateURL from "../component/PrivateURL.jsx";
import LoadingBar from "../component/LodingBar";


function MyPage() {


  const [onModal, setOpenModal] = useState(false);

  return (

    <section className={style.container}>
      {onModal
        ? <Modal closeModal={setOpenModal} />
        : <CreateRecipe closeModal={setOpenModal} />}
    </section>
  );
}

function CreateRecipe({ closeModal }) {

  const [dataTest, setDataTest] = useState([]);
  const [tabSwitch, setTabSwitch] = useState(false);
  const [anySwitch, setAnySwitch] = useState(false);

  const cookies = new Cookies();
  const token = cookies.get('token');
  const s3URL = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/" // --> 리사이징 안된 이미지 저장하는곳
  // const s3URL = "https://s3-bucket-react-file-upload-test-5jo-resized.s3.us-east-2.amazonaws.com/upload/"   //리사이징된 이미지 저장하는곳


  useEffect(() => {
    setAnySwitch(true)
    const userId = cookies.get('userId')
    const api = `http://localhost:8080/mypage/recipe/list/${userId}`;
    // const api=`http://localhost:8080/mypage/recipe/list/2`;
    axios.get(api, { headers: { Authorization: token } })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setDataTest(res.data)
        setAnySwitch(false)
      })
  }, []);

  const string_cuting = (value) => {
    let string = '';
    if (value == null) {
      string = "만드는 법 미기재";
    } else {
      for (const v of value) {
        string = string + v.description
      }
    }

    return string
  }


  return (
    <>
      <Navigation />
      <div>{/*상단에 새로운레시피 작성 버튼 */}
        <section className={style.container1}>
          <div className={style.My_recipes}>
            <h1 className={style.title}>새로운 레시피 작성을 하시겠습니까?</h1>
            <br />
            <button className={style.create_recipe_bt} onClick={() => {
              closeModal(true);
            }}>작성시작</button>
            <br />
          </div>
        </section>
        <section className={style.container2}>
          <div className={style.container3}>
            <ul className={style.tabType}> 
              <li className={style.tabItem}>
                {tabSwitch === true 
                  ? <div className={style.pickTabText} onClick={()=>{setTabSwitch(true)}}>레시피 보기</div>
                  : <div className={style.tabText} onClick={()=>{setTabSwitch(true)}}>레시피 보기</div>}
                
              </li>
              <li className={style.tabItem}>
                {tabSwitch === false
                  ? <div className={style.pickTabText} onClick={()=>{setTabSwitch(false)}}>열람 주소 관리</div>
                  : <div className={style.tabText} onClick={()=>{setTabSwitch(false)}}>열람 주소 관리</div>}
                
              </li>
            </ul>
            
            {tabSwitch === true?( //탭 선택에 따른 2가지 ui보여줌
            <>
              {anySwitch && <LoadingBar/>}
              <div className={style.public_recipes}>
                {dataTest.map((data, index) => (
                  <>{/* 레시피데이터 반복문 돌리면서 바인딩 */}
                    <div className={style.recipe}>
                      <Link to="/board/detail" className={style.imageAndText}
                        onClick={() => {
                          window.sessionStorage.setItem(
                            "detail_recipeId", data.recipeId
                          );
                        }}>
                        {data.foodImage
                          ? <img className={style.recipe_img} src={s3URL + data.foodImage} alt="testimg" title="testimg" /> //s3에 있는 이미지
                          : <img className={style.recipe_img} src={noImg} alt="testimg" title="testimg" />} {/*대체이미지(NoImage)*/}

                        <h2 className={style.recipe_title}>{data.title == null ? "제목이 없습니다." : data.title}</h2>
                        <h5 className={style.recipe_title2}>
                          {data.keywordList.map((v) => ("#" + v.keywordName + "  "))}
                        </h5>
                        <ul className={style.recipe_genres}>
                          {"Time " + data.cookingTime.toString() + "Min | level "
                            + data.level + " | " + (data.isOpenable === 1 ? "공개" : "비공개")}
                        </ul>
                        <p className={style.recipe_summary}>
                          {
                            // 문자열 합치는 함수 외부에서 만들어서 사용 -> 글자수넘치면 '...'으로 대체
                            string_cuting(data.cookMethods).length >= 60
                              ? string_cuting(data.cookMethods).substr(0, 60) + " ..."
                              : string_cuting(data.cookMethods)
                          }
                        </p>
                      </Link>
                    </div>
                  </>
                ))}
              </div>
            </>
            
            ):(
            <>
              <PrivateURL />
            </>
            )}
            
          </div>

        </section>
      </div>

    </>
  );
}

export default MyPage;