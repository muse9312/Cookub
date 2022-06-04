import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const REST_API_KEY = "a2b02f5b67bf10d12472ebb1c0541618";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const CLIENT_SECRET = "NbjkLR8u5srLPORxXYAw3OT2RvjcOCSa";

    // calllback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    const navigate = useNavigate();

    const getToken = async () => {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET,
        });

        try {
            // access token 가져오기
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            );

            // Kakao Javascript SDK 초기화
            window.Kakao.init(REST_API_KEY);
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            navigate("/kakaoSignup");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return null;
};

export default Auth;
