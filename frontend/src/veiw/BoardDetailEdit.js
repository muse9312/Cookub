import React, { useEffect, useState } from "react";
import Navigation from "../component/Navigation";
import style from './BoardDetail.module.css';
import noImg from '../assets/img/noimg.PNG';
import { TiEdit, TiLockClosed, TiPuzzle, TiStarFullOutline, TiStopwatch, TiTag, TiTickOutline, TiTrash } from 'react-icons/ti';
import axios from "axios";
import Cookies from "universal-cookie";



function BoardDetailEdit() {

  const [recipe, setRecipe] = useState([]);

  const cookie = new Cookies();
  const token = cookie.get('token');

  const imgUrl = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/" // --> 리사이징 안된 이미지 저장하는곳
  // const imgUrl = "https://s3-bucket-react-file-upload-test-5jo-resized.s3.us-east-2.amazonaws.com/upload/"   //리사이징된 이미지 저장하는곳


  


  useEffect(() => {
    const id = window.sessionStorage.getItem("detail_recipeId")

    axios
      .get(`http://localhost:8080/mypage/recipe/${id}`, {
        headers: {
          Authorization: `${token}`
        }
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setRecipe(res.data);
      })

  }, []);

  const editDone = (str) => {
     // "recipe.title" 을 전달받으면 "."을 기준으로 잘라 배열형태가 됨.
    const strSlice = str.split('.');
    document.querySelector(`[name=recipe_${strSlice[1]}]`).value === "" | document.querySelector(`[name=recipe_${strSlice[1]}]`).value === undefined
      ? console.log(eval(str)) //eval() 함수는 문자열 값을 받아 변수이름으로 사용할수 있게 바꿔주는 기능!
      : console.log(document.querySelector(`[name=recipe_${strSlice[1]}]`).value)
  }

  const editButtonEvent = () => { //수정완료 누르면 동작하는 함수
    let result = []

    const ingreResult = []; // 재료 오브젝트
    for(var i=0;i<recipe.ingredients.length;i++){

      let value = "";
      if(document.querySelector(`[name=recipe_ingredientName${i}]`).value === ""){
        value = recipe.ingredients[i].ingredientName
      }else{
        value = document.querySelector(`[name=recipe_ingredientName${i}]`).value
      }

      let value2 = "";
      if(document.querySelector(`[name=recipe_amount${i}]`).value === ""){
        value2 = recipe.ingredients[i].amount
      }else{
        value2 = document.querySelector(`[name=recipe_amount${i}]`).value
      }

      const obj = {
        "ingredientId":recipe.ingredients[i].ingredientId, //재료의 Id도 json에 담아서 백으로 넘김.
        "ingredientName":value,
        "amount":value2
      }
      ingreResult.push(obj)
    }

    const methodResult = []; //만드는 법 오브젝트
    for(var i=0;i<recipe.cookMethods.length;i++){

      let value = "";
      if(document.querySelector(`[name=recipe_description${i}]`).value === ""){
        value = recipe.cookMethods[i].description
      }else{
        value = document.querySelector(`[name=recipe_description${i}]`).value
      }

      const obj = {
        "methodId": recipe.cookMethods[i].methodId,
        "step" : recipe.cookMethods[i].step,
        "description": value,
        "picture" : recipe.cookMethods[i].picture
      }
      methodResult.push(obj)
    }

    let titleValue = "";
    if(document.querySelector("[name=recipe_title]").value === ""){
      titleValue = recipe.title
    }else{
      titleValue = document.querySelector("[name=recipe_title]").value
    }

    let levelValue = "";
    if(document.querySelector("[name=recipe_level]").value === ""){
      levelValue = recipe.level
    }else{
      levelValue = document.querySelector("[name=recipe_level").value
    }

    let keypointValue = "";
    if(document.querySelector("[name=recipe_keypoint]").value === ""){
      keypointValue = recipe.keypoint
    }else{
      keypointValue = document.querySelector("[name=recipe_keypoint").value
    }

    let isOpenableValue = "";
    if(document.querySelector("[name=recipe_isOpenable]").value === ""){
      isOpenableValue = recipe.isOpenable
    }else{
      isOpenableValue = document.querySelector("[name=recipe_isOpenable").value
    }

    let cookingTimeValue = "";
    if(document.querySelector("[name=recipe_cookingTime]").value === ""){
      cookingTimeValue = recipe.cookingTime
    }else{
      cookingTimeValue = document.querySelector("[name=recipe_cookingTime").value
    }

    console.log(recipe.likeCnt)

    result.push({
      "recipeId":Number(window.sessionStorage.getItem("detail_recipeId")),
      "title" : titleValue,
      "likeCnt" : recipe.likeCnt,
      "level" : levelValue,
      "keypoint" : keypointValue,
      "isOpenable" : isOpenableValue,
      "foodImage" : recipe.foodImage,
      "cookingTime" : cookingTimeValue,
      "ingredients" : ingreResult,
      "cookMethods" : methodResult,
      "keywordList": recipe.keywordList
    })


    console.log(result)

    axios.post(`http://localhost:8080/mypage/recipe/edit/${window.sessionStorage.getItem("detail_recipeId")}`, JSON.stringify(result[0]), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/mypage"
      })
  }

  return (
    <>
      <Navigation />
      <div >
        <div className={style.container}>
          <div className={style.empty} />
          <div className={style.contents}>
            <div className={style.editAndDelete}>
              <button className={style.delete_btn} onClick={() => { window.history.back() }}> 돌아가기</button>
              <button className={style.delete_btn} onClick={() => { editButtonEvent() }}><TiTickOutline /> 수정완료</button>
            </div>
            <div className={style.container2}>
              <div className={style.step_top}>
                {/* 제목 */}
                <input
                  placeholder={recipe.title}
                  type="text" name="recipe_title" id="title" label="title"
                ></input>
                <div className={style.top_cont}>
                  <div className={style.top_img}>
                  {recipe.foodImage !== null
                      ? <img className={style.title_img} src={imgUrl + recipe.foodImage} alt="testimg" title="testimg" />
                      : <img className={style.title_img} src={noImg} alt="testimg" title="testimg" />} {/*대체 이미지*/}
                  </div>
                  <div className={style.top_discription}>
                    {/* 난이도, 키포인트, 공개여부, 조리시간, 키워드 */}
                    <ul className={style.disc_list}>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiStarFullOutline /></div>
                        <span className={style.disc_text}>키포인트</span>
                        <p className={style.disc_text2}>
                          <textarea
                            placeholder={recipe.keypoint}
                            type="text" name="recipe_keypoint" id="keypoint" label="keypoint"
                          ></textarea>
                        </p>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiLockClosed /></div>
                        <span className={style.disc_text}>공개여부</span>
                        <span className={style.disc_text2}>
                          <input
                            placeholder={recipe.isOpenable === 1 ? "공개" : "비공개"}
                            type="text" name="recipe_isOpenable" id="isOpenable" label="isOpenable"
                          ></input>
                        </span>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiPuzzle /></div>
                        <span className={style.disc_text}>난이도</span>
                        <span className={style.disc_text2}>
                          <input
                            placeholder={recipe.level}
                            type="text" name="recipe_level" id="level" label="level"
                          ></input>
                        </span>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiStopwatch /></div>
                        <span className={style.disc_text}>조리시간</span>
                        <span className={style.disc_text2}>
                          <input
                            placeholder={recipe.cookingTime + "  분"}
                            type="text" name="recipe_cookingTime" id="cookingTime" label="cookingTime"
                          ></input>
                        </span>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiTag /></div>
                        <span className={style.disc_text}>키워드</span>
                        <span className={style.disc_text2}>
                          <input
                            placeholder={ //recipe의 값이 들어온지 부터 확인!
                              recipe.keywordList === undefined | recipe.keywordList === null
                                ? console.log("언디파인드인디?") //useEffet로 레시피값을 state에 저장하기 전에 렌더링 발생!
                                : (recipe.keywordList).map((v) => { return " #" + v.keywordName; }) //값이 들어오지 않은 상태에서 map()사용시 에러
                            }
                            type="text" name="recipe_level" id="level" label="level"
                          ></input>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 아래 코드는 재료목록 코드 */}
              <div className={style.ingre_cont}>
                <div className={style.ingreTitle}>
                  <b className={style.ingreT1}>재료</b>
                  <span className={style.ingreT2}>ingredients</span>
                </div>
                <div className={style.ingreBox}>
                  <ul className={style.ingreList}>
                    {recipe.ingredients === null | recipe.ingredients === undefined ?''
                      :(recipe.ingredients).map((v,i) => (
                        <li className={style.ingre}>
                          <input placeholder={v.ingredientName}
                            type="text" name={`recipe_ingredientName${i}`} id={`ingredientName${i}`} label={`ingredientName${i}`}
                          ></input>
                          <span className={style.gram}>
                          <input placeholder={v.amount}
                            type="text" name={`recipe_amount${i}`} id={`amount${i}`} label={`amount${i}`}
                          ></input>
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* 아래 코드는 조리법 목록 코드 */}
              <div className={style.step_cont}>
                <div className={style.step_title}>
                  <b className={style.step_T1}>조리순서</b>
                  <span className={style.step_T2}>steps</span>
                </div>
                {recipe.ingredients == null ? ''
                  : recipe.cookMethods.map((v,i) => (
                    <div className={style.step_list}>
                      <div className={style.numberAndText}>
                        <span className={style.numbering}>{v.step}</span>
                        <div className={style.step_text}>
                          <textarea placeholder={v.description}
                            type="text" name={`recipe_description${i}`} id={`description${i}`} label={`description${i}`}
                          ></textarea>
                        </div>
                      </div>
                      <div className={style.steps_img}>
                        {v.picture !== null &&
                          v.picture !== ""
                          ? <img className={style.step_img} src={imgUrl + v.picture} alt="testimg" title="testimg" />
                          : <input type='file'/>}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className={style.empty2} />
        </div>

      </div>
    </>
  );
}

export default BoardDetailEdit;