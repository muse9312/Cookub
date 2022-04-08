
import React, { useEffect, useState } from "react";
import Logo from '../assets/img/CookubLogo.png';
import Pdf from "react-to-pdf";
import style from './CreatePdF.module.css';

import Cookies from 'universal-cookie';


const ref = React.createRef();



const CreatePDF = ({recipe,setPdfMode}) => {
  const cookies = new Cookies();
  const userName = cookies.get("username") + " " 

  return (
    <>
      <div  ref={ref}>
        <div className={style.watermarked}>{userName.repeat(500)}</div>
        <span className={style.doc}>
          <div className={style.pdf_body}>
            <div className={style.pdf_header}>
              <h1 className={style.title}>
                {recipe.title == null ? "제목이 없습니다." : recipe.title}
              </h1>
              <div className={style.pdf_img}>
                <img  src={Logo}  alt="COOKUB"/>
              </div>
            </div>
            
            <div className={style.ingre_cont}>
              <div className={style.ingreTitle}>
                <b className={style.ingreT1}>재료</b>
                <span className={style.ingreT2}>ingredients</span>
              </div>
              <div className={style.ingreBox}>
                <ul className={style.ingreList}>
                  {recipe.ingredients == null ? ''
                    : recipe.ingredients.map((v) => (
                      <li className={style.ingre}>{v.ingredientName}
                        <span className={style.gram}>{v.amount}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            
            <div className={style.step_cont}>
              <div className={style.step_title}>
                <b className={style.step_T1}>조리순서</b>
                <span className={style.step_T2}>steps</span>
              </div>
              {recipe.ingredients == null ? ''
                : recipe.cookMethods.map((v) => (
                  <div className={style.step_list}>
                    <div className={style.numberAndText}>
                      <span className={style.numbering}>{v.step}</span>
                      <div className={style.step_text}>{v.description}</div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </span>
      </div>
      <span>
        <Pdf targetRef={ref} filename="TestPdfFile.pdf">
          {({ toPdf }) => <button className={style.pdf_btn} onClick={toPdf}>PDF 다운로드</button>}
        </Pdf>
      </span>
      <button className={style.pdf_btn} onClick={()=>{setPdfMode(false)}}>돌아가기</button>

      
    </>
  );
};


export default CreatePDF;