// import React, { useState, useEffect } from "react";

import '../assets/css/Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import axios from 'axios'

function Login() {

  function SendSignUp(e) {
    e.preventDefault();
    window.location.href = "/signup"

  }

  function LoginData(e) {
    e.preventDefault();


    try {
      let data = {
        email: document.querySelector('[name=useremail]').value,
        password: document.querySelector('[name=password]').value
      }

      axios
        .post('http://localhost:8080/user/auth/signIn', JSON.stringify(data), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {
          console.log(res);
          // console.log("res.data.accessToken : " + res.data.data.data.token);
          console.log(res.data);
          // if (res.data.data.data == null) {
          //   alert("인증되지 않는 회원입니다")
          // } else {
          //   const { accessToken } = res.data.data.data.token;

          //   // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
          //   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          //   // accessToken을 localStorage, cookie 등에 저장하지 않는다!

            window.location = "/"
          // }



        });

    } catch (error) {

    }









  }

  return (
    <>
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
                <Stack direction="row" spacing={4}>
                  <Button variant="outlined" type="submit" >Login</Button>
                  <Button variant="outlined" onClick={SendSignUp}>SignUp</Button>
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
