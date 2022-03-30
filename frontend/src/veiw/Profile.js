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
import Navigation from '../component/Navigation'

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
            window.sessionStorage.setItem('id', data.id)
            console.log(cookies.get('kakao_id'));

            cookies.set('nickname', data.properties.nickname)
            window.sessionStorage.setItem('nickname', data.properties.nickname)
            console.log(data.properties.nickname);

            cookies.set('img', data.properties.profile_image)
            window.sessionStorage.setItem('profile_img', data.properties.profile_image)
            console.log(data.properties.profile_image);
        } catch (err) {
            console.log(err);
        }

    };



    useEffect(() => {
        getProfile();
    }, []);


    return (
        <>

            <Navigation />
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
