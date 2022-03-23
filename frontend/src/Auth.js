// import React from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import qs from "qs";

// const Auth = () => {
//     const REST_API_KEY = "b27394601c5c81c4926f41949e1dc837";
//     const REDIRECT_URI = "http://e7e0-222-112-83-79.ngrok.io/oauth";
//     const CLIENT_SECRET = "cSk7J18ZvwkMSxOjeSibWJMKmcaqzSi9";
//     // calllback으로 받은 인가코드
//     const code = new URL(window.location.href).searchParams.get("code");

//     const getToken = async () => {
//         const payload = qs.stringify({
//             grant_type: "authorization_code",
//             client_id: "b27394601c5c81c4926f41949e1dc837",
//             redirect_uri: "http://e7e0-222-112-83-79.ngrok.io/oauth",
//             code: code,
//             client_secret: "cSk7J18ZvwkMSxOjeSibWJMKmcaqzSi9",
//         });
//         try {
//             // access token 가져오기
//             const res = await axios.post(
//                 "https://kauth.kakao.com/oauth/token",
//                 payload
//             );

//             // Kakao Javascript SDK 초기화
//             window.Kakao.init("275d046ae2b1c016eab14fc240cd691a");
//             // access token 설정
//             window.Kakao.Auth.setAccessToken(res.data.access_token);
//             console.log(res.data.access_token);

//         } catch (err) {
//             console.log(err);
//         }
//     };
//     useEffect(() => {
//         getToken();
//     }, []);
//     return null;
// };
// export default Auth;