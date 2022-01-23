import React from "react";
import style from './MyPage.module.css';
import { Button } from 'react-bootstrap';



function MyPage() {
  return ( 
    <section className={style.container}>
      <div className={style.My_recipes}>
        <h1>새로운 레시피 작성을 하시겠습니까?</h1>
        <button className="creat_recipe_button">작성시작</button>
      </div>
    </section>
   );
}

export default MyPage;