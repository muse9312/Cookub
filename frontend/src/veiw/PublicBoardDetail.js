import React, { useEffect, useState } from 'react';
import QRcode from 'qrcode.react'
import axios from 'axios';
import style from './BoardDetail.module.css';
import Cookies from 'universal-cookie';
import img from '../assets/img/testfood.jpg';
import { TiLockClosed, TiPuzzle, TiStarFullOutline, TiStopwatch, TiTag, TiHeartOutline, TiHeart } from 'react-icons/ti';
import noImg from '../assets/img/noimg.PNG';
import Navigation from '../component/Navigation'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import LoadingBar from '../component/LodingBar';


function PublicBoardDetail() {

  const [recipe, setRecipe] = useState([]);
  const [anySwitch, setAnySwitch] = useState(false);
  const [likeSwitch, setLikeSwitch] = useState(false);

  const cookie = new Cookies();
  const token = cookie.get('token');
  const imgUrl = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/" // --> 리사이징 안된 이미지 저장하는곳
  // const imgUrl = "https://s3-bucket-react-file-upload-test-5jo-resized.s3.us-east-2.amazonaws.com/upload/"   //리사이징된 이미지 저장하는곳

  function BtnProfile(e) {
    e.preventDefault();
    if (token == null) {
      alert('Please login')
      window.location.href = "/login"
    } else {
      window.sessionStorage.setItem("id", recipe.user.userId);
      console.log(recipe.user.userId);
      window.location.href = "/Publicprofile"
    }


  }

  useEffect(() => {
    setAnySwitch(true)
    const id = window.sessionStorage.getItem("detail_recipeId")


    axios
      .get(`http://${process.env.REACT_APP_HOST}/mypage/recipe/${id}`, {
        headers: {
          Authorization: `${token}`
        }
      })
      .then((res) => {
        console.log(res);
        setRecipe(res.data);
        setAnySwitch(false)
      })
  }, []);

  const handleError = (e) => {
    e.target.scr = img;
  }


  return (
    /* <QRcode id="myqr" value={"https://github.com/Namhoon-95"} 
            size={320} includeMargin={true} /> --> QR 코드 생성코드 */
    <>
      <Navigation />
      <div >
        <div className={style.container}>
          <div className={style.empty} />
          <div className={style.contents}>
            <div className={style.editAndDelete}>
              {likeSwitch === true
                ? <div className={style.like_btn} onClick={() => { setLikeSwitch(false) }}><TiHeart /></div>
                : <div className={style.like_btn} onClick={() => { setLikeSwitch(true) }}><TiHeartOutline /></div>}

            </div>
            <div className={style.container2}>
              <div className={style.step_top}>
                {/* 제목 */}
                <h1 className={style.title}>
                  {anySwitch && <LoadingBar />}
                  {recipe.title == null ? "제목이 없습니다." : recipe.title}
                </h1>
                <div className={style.userurl} onClick={BtnProfile}>
                  <h2>
                    {recipe.user === undefined ? "" : recipe.user.username}
                  </h2>
                </div>
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
                          {recipe.keypoint == null ? "내용이 없습니다." : recipe.keypoint}
                        </p>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiLockClosed /></div>
                        <span className={style.disc_text}>공개여부</span>
                        <span className={style.disc_text2}>
                          {recipe.isOpenable == null ?
                            "내용이 없습니다." :
                            recipe.isOpenable === 1 ? "공개" : "비공개"}
                        </span>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiPuzzle /></div>
                        <span className={style.disc_text}>난이도</span>
                        <span className={style.disc_text2}>
                          &nbsp;&nbsp;&nbsp;{recipe.level == null ? "내용이 없습니다." : recipe.level}
                        </span>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiStopwatch /></div>
                        <span className={style.disc_text}>조리시간</span>
                        <span className={style.disc_text2}>
                          {recipe.cookingTime == null ? "내용이 없습니다." : recipe.cookingTime}&nbsp;분
                        </span>
                      </li>
                      <li className={style.disc_item}>
                        <div className={style.disc_icon}><TiTag /></div>
                        <span className={style.disc_text}>키워드</span>
                        <span className={style.disc_text2}>
                          {recipe.keywordList == null ? '' : recipe.keywordList.map((v) => ("#" + v.keywordName + "  "))}
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

              {/* 아래 코드는 조리법 목록 코드 */}
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
                      <div className={style.steps_img}>
                        {v.picture !== "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/aboutImg.jpg" &&
                          v.picture !== "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/about3.jpg" &&
                          v.picture !== null &&
                          v.picture !== ""
                          ? <img className={style.step_img} src={imgUrl + v.picture} onError={handleError} alt="testimg" title="testimg" />
                          : null}

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

export default PublicBoardDetail;