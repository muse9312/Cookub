import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import About from '../veiw/About';
import Board from '../veiw/Board';
import MyPage from '../veiw/MyPage';
import UserInfo from '../veiw/UserInfoUpdate';
import logo from '../assets/img/CookubLogo.png'
import style from './Navigation.module.css';
import Swal from 'sweetalert2'

import Cookies from 'universal-cookie';




function Navigation() {

  const cookies = new Cookies();
  const token = cookies.get('token');

  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();

  console.log(token);

  function SendLogin(e) {
    e.preventDefault();
    window.location.href = "/login"

  }

  function SendProfile(e) {
    e.preventDefault();
    window.location.href = "/userInfo"

  }

  function Logout(e) {
    e.preventDefault();
    console.log(token);


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

  function getProfile() {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);


  function BtnHendler() {
    const token = cookies.get('token');

    if (token == null) {
      return <button className={style.login_button} onClick={SendLogin}>Login</button>;
    } else {
      return <div> <h2> {cookies.get('username')} 님 어서오세요</h2> <button className={style.login_button} onClick={Logout}>Logout</button> </div>;
    }
  }

  function BtnUserInfo() {
    const token = cookies.get('token');

    if (token == null) {
      return null
    } else {
      return <li className={style.list_item}><Link className={style.nav_item} to='/userInfo' element={<UserInfo />}>Profile</Link></li>
    }
  }



  return (
    <div className={style.nav}>
      <a className="imgbtn" href={'/'}>
        <img className={style.logo_img} src={logo} alt="COOKUB" />
      </a>
      <div>
        {BtnHendler()}
      </div>
      <div>
        <h2>{user_id}</h2>
        <h2>{nickName}</h2>
        <img src={profileImage}></img>
      </div>
      <br />
      <li className={style.list_item}><Link className={style.nav_item} to='/about' element={<About />}>ABOUT</Link></li>
      <li className={style.list_item}><Link className={style.nav_item} to='/board' element={<Board />}>PUBLIC RECIPE</Link></li>
      <li className={style.list_item}><Link className={style.nav_item} to='/mypage' element={<MyPage />}>REPOSITORY</Link></li>
      <div>
        {BtnUserInfo()}
      </div>
      <br /><br /><br /><br />
      <p className={style.ceo_pm}>대표번호 :  02 - 9575 - 4323</p>
      <p className={style.footer}>
        주식회사  레인보우<br />
        owner 김남현<br />
        서울특별시 금천구 가산디지털1로(가산동)<br />
        우림라이온스밸리 8층<br />
        budiness licence 740-99-1053<br />
        online business licence 2022-서울서초구-1532<br />
        개인정보 관리 책임자 : 레인보우(skagns@gmail.com)<br /><br />

        이용약관 <br />
        개인정보취급방침<br />
        이용안내<br />
      </p>
    </div>

  );
}

export default Navigation;