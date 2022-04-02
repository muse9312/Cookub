import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const PrivatePage = ()=>{
  const {key}  = useParams();
  const [security, setSecurity] = useState(false);

  const tricData = {asdf:{data:''},hjkl:{data:''}}
  const pixdata = tricData[key]

  useEffect(()=>{
    //axios 로 key를 보내서 get한다
    axios
    .get(`http://localhost:8080/mypage/recipe/${key}`)
    .then((res) => {
      console.log(res);
    })
    //state에 리턴된 데이터를 냄


    if(!pixdata){
      setSecurity(false)
    }else{
      setSecurity(true)
    }
  },[])



  return(
    <>
      {
        security
        ?(
        <h1>접속에 성공하셨습니다.</h1>

        // <div className={style.public_recipes}>
        //       {dataTest.map((data, index) => (
        //         <>{/* 레시피데이터 반복문 돌리면서 바인딩 */}
        //           <div className={style.recipe}>
        //             <Link to="/board/detail" className={style.imageAndText}
        //               onClick={() => {
        //                 window.sessionStorage.setItem(
        //                   "detail_recipeId", data.recipeId
        //                 );
        //               }}>
        //               {data.foodImage
        //                 ? <img className={style.recipe_img} src={s3URL + data.foodImage} alt="testimg" title="testimg" /> //s3에 있는 이미지
        //                 : <img className={style.recipe_img} src={noImg} alt="testimg" title="testimg" />} {/*대체이미지(NoImage)*/}

        //               <h2 className={style.recipe_title}>{data.title == null ? "제목이 없습니다." : data.title}</h2>
        //               <h5 className={style.recipe_title2}>
        //                 {data.keywordList.map((v) => ("#" + v.keywordName + "  "))}
        //               </h5>
        //               <ul className={style.recipe_genres}>
        //                 {"Time " + data.cookingTime.toString() + "Min | level "
        //                   + data.level + " | " + (data.isOpenable === 1 ? "공개" : "비공개")}
        //               </ul>
        //               <p className={style.recipe_summary}>
        //                 {
        //                   // 문자열 합치는 함수 외부에서 만들어서 사용 -> 글자수넘치면 '...'으로 대체
        //                   string_cuting(data.cookMethods).length >= 60
        //                     ? string_cuting(data.cookMethods).substr(0, 60) + " ..."
        //                     : string_cuting(data.cookMethods)
        //                 }
        //               </p>
        //             </Link>
        //           </div>
        //         </>
        //       ))}
        //     </div>

        )
        :<h1>유효하지 않은 키로 접속 하셨습니다.</h1>
      }
    </>
  );
}

export default PrivatePage;
