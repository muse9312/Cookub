import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import About from '../veiw/About';
import Board from '../veiw/Board';
import MyPage from '../veiw/MyPage';
import Profile from '../veiw/Profile';
import PublicProfile from '../veiw/PublicProfile';
import UserInfo from '../veiw/UserInfoUpdate';
import logo from '../assets/img/CookubLogo.png'
import style from './Navigation.module.css';
import Swal from 'sweetalert2'
import noImg from '../assets/img/noimg.PNG'

import Cookies from 'universal-cookie';




function Navigation() {

  const cookies = new Cookies();
  const token = cookies.get('token');
  const imgUrl = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/" // --> 리사이징 안된 이미지 저장하는곳




  function SendLogin(e) {
    e.preventDefault();
    window.location.href = "login"

  }

  function Logout(e) {
    e.preventDefault();
    console.log(token);

    window.sessionStorage.clear();




    cookies.remove('token')
    cookies.remove('username')
    cookies.remove('userId')
    cookies.remove('profile')
    cookies.remove('email')
    cookies.remove('tel')
    cookies.remove('birth')
    cookies.remove('field')
    cookies.remove('workNation')
    cookies.remove('career')
    cookies.remove('grade')
    cookies.remove('workPlace')
    Swal.fire({ icon: 'success', title: 'Goodbye!', text: 'Logout complete!' })

    setTimeout(function () {
      window.location = '/';
    }, 2500);
    // window.location.reload("/");

  }


  function BtnHendler() {
    const token = cookies.get('token');
    const kakao = cookies.get('kakao_id')
    const profileFile = cookies.get('profile')

    console.log(imgUrl + profileFile);

    if (kakao == null && token == null) {
      return <button className={style.login_button} onClick={SendLogin}>Login</button>;
    } else {
      return <div>
        <div  >
          {cookies.get('profile')
            ?<img className="cat" src={imgUrl + profileFile} alt="profile"/>
            :<img className="cat" src={noImg} alt="profile"/>
          }
        </div>
        <h2>
          {cookies.get('nickname')}{cookies.get('username')} 님 어서오세요</h2> <button className={style.login_button} onClick={Logout}>Logout</button> </div>;
    }

  }


  function BtnUserInfo() {
    const token = cookies.get('token');
    const kakao = cookies.get('kakao_id')

    if (token == null && kakao == null) {
      return null
    } else {
      return <li className={style.list_item}><Link className={style.nav_item} to='/Profile' element={<Profile />}>Profile</Link></li>

    }
  }

  const tokenFix =()=>{
    if(token != null){
      return "/mypage"
    }else{
      return "/login"
    }
  }



  return (
    <div className={style.nav}>
      <section>
        <a className="imgbtn" href={'/'}>
          <img className={style.logo_img} src={logo} alt="COOKUB" />
        </a>
        <div>
          {BtnHendler()}
        </div>

        <li className={style.list_item}><Link className={style.nav_item} to='/about' element={<About />}>ABOUT</Link></li>
        <li className={style.list_item}><Link className={style.nav_item} to='/board' element={<Board />}>PUBLIC RECIPE</Link></li>
        <li className={style.list_item}><Link className={style.nav_item} to={tokenFix()} element={<MyPage />}>REPOSITORY</Link></li>
        <div>
          {BtnUserInfo()}
        </div>
      </section>
      <section>
        <p className={style.footer}><br />
          서울 가산디지털단지 한가람 IT <br />
          우림라이온스밸리 8층<br />
          budiness licence 740-99-1053<br />
          online business licence 2022-서울서초구-1532<br />
          관리 책임자 : 정남훈(skagns@gmail.com)<br /><br />

          한국표준협회 클라우드 기반<br />
          풀스택 개발자 양성과정 교육생<br />
          프로젝트 입니다.
        </p>
      </section>
    </div>

  );
}

export default Navigation;