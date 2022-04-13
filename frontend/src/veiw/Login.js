// import React, { useState, useEffect } from "react";

import '../assets/css/Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2'

import Navigation from '../component/Navigation'



// import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';


import axios from 'axios'

function Login() {





  // const [cookies, setCookie] = useCookies([]);

  const cookies = new Cookies();


  function SendSignUp(e) {
    e.preventDefault();
    window.location.href = "/signup"

  }

  function KakaoClick(e) {
    e.preventDefault();
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=a2b02f5b67bf10d12472ebb1c0541618&redirect_uri=http://localhost:3000/oauth/kakao/callback&response_type=code`
  }


  function LoginData(e) {
    e.preventDefault();


    try {
      let data = {
        email: document.querySelector('[name=useremail]').value,
        password: document.querySelector('[name=password]').value
      }

      axios
        .post(`http://${process.env.REACT_APP_HOST}/user/auth/signIn`, JSON.stringify(data), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {

          console.log(res);
          console.log(res.data);
          console.log("==========================")
          console.log("token = " + res.data.token);
          console.log("userId = " + res.data.user.userId);
          console.log("email = " + res.data.user.email);
          console.log("username = " + res.data.user.username);
          console.log("tel = " + res.data.user.tel);
          console.log("birth = " + res.data.user.birth);
          console.log("field = " + res.data.user.field);
          console.log("workNation = " + res.data.user.workNation);
          console.log("grade = " + res.data.user.grade);
          console.log("career = " + res.data.user.career);
          console.log("workPlace = " + res.data.user.workPlace);
          console.log(res.status);

          if (res.status === 200) {

            // JWT Token 

            cookies.set('userId', res.data.user.userId, { path: "/" });
            cookies.set('token', res.data.token, { path: "/" });
            cookies.set('username', res.data.user.username, { path: "/" });
            cookies.set('profile', res.data.user.profile, { path: "/" });
            cookies.set('email', res.data.user.email, { path: "/" });
            cookies.set('tel', res.data.user.tel, { path: "/" });
            cookies.set('birth', res.data.user.birth, { path: "/" });
            cookies.set('field', res.data.user.field, { path: "/" });
            cookies.set('workNation', res.data.user.workNation, { path: "/" });
            cookies.set('grade', res.data.user.grade, { path: "/" });
            cookies.set('career', res.data.user.career, { path: "/" });
            cookies.set('workPlace', res.data.user.workPlace, { path: "/" });



            console.log(cookies.get('token'));



            Swal.fire({ icon: 'success', title: 'Welcome!', text: 'Login complete!' })

            setTimeout(function () {
              window.location = '/';
            }, 1000);


          } else if (res.status === 400) {
            console.log(res.status);
            Swal.fire(
              { icon: 'error', title: 'Oops...', text: 'Please check your email and password..' }
            )

          }







        });

    } catch (error) {


    }

  }

  return (
    <>
      <Navigation />
      <div className="login-inner">
        <div class="background_2">

          <h1 className="title1">Welcome to Cookub!</h1>
          <p className="subtitle">Please input your Account</p>
          <br />
          <div className="inputform">
            <form onSubmit={LoginData}>

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 0.5, width: '30ch' },
                }}
                noValidate
                autoComplete="on"
              >
                <TextField id="email" name="useremail" label="email" variant="outlined" />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Box>





              <br />
              <div id="Btn-1">
                <Stack direction="row" spacing={3}>
                  <Button variant="outlined" type="submit" >Login</Button>
                  <Button variant="outlined" onClick={SendSignUp}>SignUp</Button>
                  <Button variant="outlined" onClick={KakaoClick}>


                    Kakao</Button>
                </Stack>

              </div>


            </form>
          </div>


        </div>
      </div>
    </>
  );
};

export default Login;
