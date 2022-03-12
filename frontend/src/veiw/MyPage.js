import React, { useEffect, useState } from "react";
import style from './MyPage.module.css';
import Modal from './Modal.js'
import { Link } from "react-router-dom";
import img from '../assets/img/testfood.jpg';
import axios from "axios";


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

  useEffect(()=>{
    const data = axios(
      {
        url:'http://localhost:8080/mypage/recipe/list/2',
        method:'get'
      }
    ).then((res)=>{
      console.log(res);
      setDataTest(res.data)})

  },[]);



  return (
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
        <div className={style.public_recipes}>
          {dataTest.map((data,index)=>(
            <>{/* 레시피데이터 반복문 돌리면서 바인딩 */}
              <div className={style.recipe}>
                <Link to="/board/detail" onClick={()=>{
                  window.sessionStorage.setItem(
                    "detail_recipeId",data.recipeId
                  );
                }}>
                  <img className={style.recipe_img} src={img} alt="testimg" title="testimg" />
                  <h2 className={style.recipe_title}>여기는 제목임</h2>
                  <h5 className={style.recipe_title2}>
                    {data.keywordList.map((v)=>("#" + v.keywordName +"  "))}
                  </h5>
                  <ul className={style.recipe_genres}>
                    {"Time " + data.cookingTime.toString() + "Min | level "
                    +data.level + " | " +(data.isOpenable===1?"공개":"비공개")}
                  </ul>
                  <p className={style.recipe_summary}>
                    {
                    data.cookMethods.map((v)=>(" " + v.description +"  "))
                    }
                  </p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MyPage;