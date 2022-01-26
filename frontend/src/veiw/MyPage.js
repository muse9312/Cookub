import React, { useState } from "react";
import style from './MyPage.module.css';
import Modal from './Modal.js'




function MyPage() {

  const [onModal, setOpenModal] =useState(false);

  return ( 
    
    <section className={style.container}>
        {onModal 
        ? <Modal closeModal={setOpenModal}/> 
        : <CreateRecipe closeModal={setOpenModal}/>}
    </section>
   );
}

function CreateRecipe({closeModal}){
  return(
    <div className={style.My_recipes}>
        <h1 className={style.title}>새로운 레시피 작성을 하시겠습니까?</h1>
        <br/>
        <button className={style.create_recipe_bt} onClick={()=>{
          closeModal(true);
        }}>작성시작</button>
        <br/>
    </div>
  );
}

export default MyPage;