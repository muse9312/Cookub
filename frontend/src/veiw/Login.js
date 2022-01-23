import React, { useState } from "react";

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

    let data = {
      email: "email",
      password: "password"
    }
    const formData = new FormData();
    // const useremail = e
    //   .target['0']
    //   .value;
    // const password = e
    //   .target['1']
    //   .value;

    // formData.append("useremail", useremail);
    // formData.append("password", password);
    // formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));

    axios
      .post('http://localhost:8080/user/signin', {
        email: data.email,
        password: data.password
      })
      .then((res) => {
        console.log(res.data);
      });


    // console.log(data.useremail);
    // console.log(data.password);
    // axios(
    //   { url: 'http://localhost:8080/user/signin', method: 'post', data: formData }
    // ).then(function (res) {
    //   console.log(res.data);
    //   if (res.code == 200) {
    //     sessionStorage.setItem("useremail", res.user.email);
    //     sessionStorage.setItem("password", res.user.password);
    //     console.log(sessionStorage.getItem("useremail"), sessionStorage.getItem("password"));
    //     alert(res.msg);
    //     // window.location = '/';
    //   } else if (res.code == 400) {
    //     alert(res.msg);
    //     document.getElementById("useremail").value = "";
    //     document.getElementById("password").value = "";
    //   }

    // })



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
                <TextField id="email" name="email" label="email" variant="outlined" />
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
