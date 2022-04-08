import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/img/testfood.jpg';
import style from './Board.module.css';
import Navigation from '../component/Navigation'
import axios from "axios";
import noImg from '../assets/img/noimg.PNG';
import LoadingBar from "../component/LodingBar";



function Board() {

  const [dataTest, setDataTest] = useState([]);
  const [anySwitch, setAnySwitch] = useState(false)

  const s3URL = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/" // --> 리사이징 안된 이미지 저장하는곳
  // const s3URL = "https://s3-bucket-react-file-upload-test-5jo-resized.s3.us-east-2.amazonaws.com/upload/"   //리사이징된 이미지 저장하는곳

  useEffect(() => {
    setAnySwitch(true)
    const api = `http://localhost:8080/open/list`;
    axios.get(api)
      .then((res) => {
        console.log(res);
        setDataTest(res.data.data.data)
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

  const searchEvent = (value) => {
    setAnySwitch(true)
    const val = {"ingredientName":value}
    const api = "http://localhost:8080/mypage/search";
    axios.post(api, JSON.stringify(val), {
      headers: {
        "Content-Type": `application/json`,
      },
    }).then((res)=>{
      console.log(res);
      setDataTest(res.data)
      setAnySwitch(false)
    })
  }

  return (
    <>
      <Navigation />
      <div className={style.section}>
        <section className={style.container}>
          <div className={style.search_block}>
            <form >  
              <input 
                placeholder="재료명으로 검색하세요!"
                type="text"
                name="ingre_list"
                id="ingre" 
                label="ingre"
                className={style.proc_input}></input> 

              <button type='submit' className={style.proc_button}
                onClick={(e)=>{
                  e.preventDefault();
                  let value = document.querySelector('[name=ingre_list]').value
                  searchEvent(value)
                }}>검색</button>
            </form>
          </div>
          {anySwitch && <LoadingBar/>}
          <div className={style.public_recipes}>
          {dataTest.map((data, index) => (
                <>{/* 레시피데이터 반복문 돌리면서 바인딩 */}
                  <div className={style.recipe}>
                    <Link to="/open/detail"  className={style.imageAndText}
                      onClick={() => {
                        window.sessionStorage.setItem(
                          "detail_recipeId", data.recipeId
                        );
                      }}>
                      {data.foodImage == null | data.foodImage === "ImageUrl1" | data.foodImage === "ImageUrl" | data.foodImage === "recipeDto.getFoodImage()"
                        ? <img className={style.recipe_img} src={noImg} alt="testimg" title="testimg" /> // 대체 이미지
                        : <img className={style.recipe_img} src={s3URL + data.foodImage} alt="testimg" title="testimg" /> //s3에 있는 이미지
                      }

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
        </section>
      </div>
      
    </>
  );
}

export default Board;