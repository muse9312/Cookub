import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import About from '../veiw/About';
import Board from '../veiw/Board';
import MyPage from '../veiw/MyPage';
import UserInfo from '../veiw/UserInfoUpdate';
import logo from '../assets/img/CookubLogo.png'
import style from '../component/Navigation.module.css';
import Swal from 'sweetalert2'

import "../assets/css/Profile.css"
import Slider from 'react-animated-slider';
import content from '../component/carousel/content'
import '../assets/css/Main.css'
import Cookies from 'universal-cookie'

const Profile = () => {

    const cookies = new Cookies();

    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    // const [show, setShow] = useState(false);

    // setShow(false);
    const getProfile = async () => {
        try {
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
                url: "/v2/user/me",
            });

            // 사용자 정보 변수에 저장
            cookies.set('kakao_id', data.id)
            console.log(cookies.get('kakao_id'));
            window.sessionStorage.setItem('id', data.id)
            setUserId(data.id);
            console.log(data.id);
            setNickName(data.properties.nickname);
            cookies.set('nickname', data.properties.nickname)
            console.log(data.properties.nickname);
            cookies.set('img', data.properties.profile_image)
            setProfileImage(data.properties.profile_image);
            console.log(data.properties.profile_image);
            console.log(data.properties);
        } catch (err) {
            console.log(err);
        }

    };

    function SendLogin(e) {
        e.preventDefault();
        window.location.href = "/login"

    }

    function Logout(e) {
        e.preventDefault();

        Swal.fire({ icon: 'success', title: 'Goodbye!', text: 'Logout complete!' })

        setTimeout(function () {
            window.location = '/';
        }, 2500);
        // window.location.reload("/");

    }

    function BtnHendler() {


        if (user_id == null) {
            return <button className={style.login_button} onClick={SendLogin}>Login</button>;
        } else {
            return <div> <div class="cat">
                <img src={profileImage}></img>
                <h2>{nickName}</h2></div> <br /><br /><br /><br />  <button className={style.login_button} onClick={Logout}>Logout</button>  </div>
        }


    }

    useEffect(() => {
        getProfile();
    }, []);


    return (
        <>


            <div className={style.nav}>
                <a className="imgbtn" href={'/'}>
                    <img className={style.logo_img} src={logo} alt="COOKUB" />
                </a>
                <div>
                    {BtnHendler()}
                </div>

                <li className={style.list_item}><Link className={style.nav_item} to='/about' element={<About />}>ABOUT</Link></li>
                <li className={style.list_item}><Link className={style.nav_item} to='/board' element={<Board />}>PUBLIC RECIPE</Link></li>
                <li className={style.list_item}><Link className={style.nav_item} to='/mypage' element={<MyPage />}>REPOSITORY</Link></li>

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
            <div id="ls-1">
                <Slider id="ls-1" autoplay={2200}>
                    {content.map((item, index) => (
                        <div
                            key={index}

                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="center">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>

                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </>

    );
};

export default Profile;
