
import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie'

// ================================  Data  ====================================

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid";
import Input from '@mui/material/Input';
import Autocomplete from '@mui/material/Autocomplete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import ReactFileReader from "react-file-reader";

import AvatarInput from "../component/FileUpload/AvatarInput"

import '../assets/css/Profile.css'

import Cook from "../assets/img/sebastian-coman-photography-eBmyH7oO5wY-unsplash.jpg"

import Navigation from "../component/Navigation";

// import Nation from '../component/data/Nation'

// Fileupload component


import axios from 'axios'

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

            // 카카오 id
            cookies.set('kakao_id', data.id)
            console.log(cookies.get('kakao_id'));

            // 카카오 닉네임
            cookies.set('nickname', data.properties.nickname)
            console.log(data.properties.nickname);

            // 카카오 프로필 사진
            cookies.set('img', data.properties.profile_image)
            console.log(data.properties.profile_image);

            // 카카오 이메일
            cookies.set('email', data.kakao_account.email)
            console.log(data.kakao_account.email);

            // 카카오 생일
            cookies.set('birth', data.kakao_account.birthday)
            console.log(data.kakao_account.birthday);



        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {
        getProfile();
    }, []);


    const [file, setFiles] = useState("https://i.imgur.com/t1xXavI.png");

    const handleFiles = (files) => {
        console.log(files);
        setFiles(files.base64);
    };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // ================================  Page location  ====================================


    function SendLogin(e) {
        e.preventDefault();
        window.location.href = "/login"

    }

    // ================================  axios post userInfo  ====================================


    function RegData(e) {
        e.preventDefault(e);
        console.log(e);

        // try {
        //   let data = {

        //     // 프로필이미지
        //     file: cookies.get('img'),

        //     // 페스워드
        //     password: document.querySelector('[name=password]').value,

        //     // 이메일
        //     email: cookies.get('email'),

        //     // 이름
        //     username: cookies.get('nickname'),

        //     // 전화번호
        //     tel: document.querySelector('[name=tel]').value,

        //     // 생일
        //     birth: cookies.get('birth'),

        //     // 전문분야
        //     field: document.querySelector('[name=field]').value,

        //     // 거주국가
        //     workNation: document.querySelector('[name=work_nation]').value,

        //     // 수준
        //     grade: document.querySelector('[name=grade]').value,

        //     // 경력
        //     career: document.querySelector('[name=career]').value,

        //     // 현재 근무지
        //     workPlace: document.querySelector('[name=work_place]').value


        //   }
        //   console.log(data);
        //   // axios
        //   //   .post('http://localhost:8080/user/auth/signUp', JSON.stringify(data), {
        //   //     headers: {
        //   //       "Content-Type": `application/json`,
        //   //     },
        //   //   })
        //   //   .then((res) => {

        //   //     console.log(res);
        //   //     console.log(res.data);
        //   //     console.log("==========================")
        //   //     console.log("token = " + res.data.token);
        //   //     console.log("userId = " + res.data.user.userId);
        //   //     console.log("email = " + res.data.user.email);
        //   //     console.log("username = " + res.data.user.username);
        //   //     console.log("tel = " + res.data.user.tel);
        //   //     console.log("birth = " + res.data.user.birth);
        //   //     console.log("field = " + res.data.user.field);
        //   //     console.log("workNation = " + res.data.user.workNation);
        //   //     console.log("grade = " + res.data.user.grade);
        //   //     console.log("career = " + res.data.user.career);
        //   //     console.log("workPlace = " + res.data.user.workPlace);
        //   //     console.log(res.status);









        //   //   });

        // } catch (error) {


        // }


        // 프로필이미지
        const file = cookies.get('img')
        console.log(file);
        // 페스워드
        const password = document.querySelector('[name=password]').value;
        console.log(document.querySelector('[name=password]').value);
        // 이메일
        const email = cookies.get('email')
        console.log(email);
        // 이름
        const username = cookies.get('nickname')
        console.log(username);
        // 전화번호
        const tel = document.querySelector('[name=tel]').value;
        console.log(document.querySelector('[name=tel]').value);
        // 생일
        const birth = document.querySelector('[name=birth]').value;
        console.log(document.querySelector('[name=birth]').value);
        // 전문분야
        const field = document.querySelector('[name=field]').value;
        console.log(document.querySelector('[name=field]').value);
        // 거주국가
        const workNation = document.querySelector('[name=work_nation]').value;
        console.log(document.querySelector('[name=work_nation]').value);
        // 수준
        const grade = document.querySelector('[name=grade]').value;
        console.log(document.querySelector('[name=grade]').value);
        // 경력
        const career = document.querySelector('[name=career]').value;
        console.log(document.querySelector('[name=career]').value);
        // 현재 근무지
        const workPlace = document.querySelector('[name=work_place]').value;
        console.log(document.querySelector('[name=work_place]').value);


        const formData = new FormData();

        formData.append('file', file);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username', username);
        formData.append('tel', tel);
        formData.append('birth', birth);
        formData.append('field', field);
        formData.append('workNation', workNation);
        formData.append('grade', grade);
        formData.append('career', career);
        formData.append('workPlace', workPlace);
        console.log(formData);



        axios({
            url: 'http://localhost:8080/user/auth/signUp',
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: 'post',
            data: formData
        }).then(function (res) {
            console.log(res.data);

            window.location = '/login';

        })
    }




    return (
        <>
            <Navigation />

            <div className="reg-inner">

                <div class="regbackground">
                    <p className="subtitle">Happy Cooking!!</p>
                </div>
                <br />
                <br />
                <form onSubmit={RegData}>
                    {/* 프로필 이미지 */}
                    <img className="profilePic" src={Cook} alt="Black dog with red scarf" />

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                        <div>

                            {/* 이메일 */}
                            <Grid>
                                <TextField
                                    label="Email*"
                                    id="useremail"
                                    name="useremail"
                                    sx={{
                                        m: 1,
                                        width: '30ch'
                                    }} />


                                {/* 비밀번호 */}

                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    sx={{
                                        m: 1,
                                        width: '30ch'
                                    }}
                                />

                                {/* <FormControl
                sx={{
                  m: 1,
                  width: '25ch'
                }}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword
                    ? 'text'
                    : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={<InputAdornment position="end" name="password"  > <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {
                      values.showPassword
                        ? <VisibilityOff />
                        : <Visibility />
                    }
                  </IconButton>
                  </InputAdornment>}
                  label="Password*" />
              </FormControl> */}
                            </Grid>
                            <br />

                            {/* 이름 */}
                            <Grid >
                                <TextField
                                    label="Name*"
                                    id="username"
                                    name="username"
                                    sx={{
                                        m: 1,
                                        width: '30ch'
                                    }} />

                            </Grid>
                            <br />
                            {/* 전화,생일 */}
                            <Grid >
                                <TextField
                                    label="Tel"
                                    name="tel"
                                    sx={{
                                        m: 1,
                                        width: '30ch'
                                    }} />

                                <TextField
                                    id="standard-helperText"
                                    type="date"
                                    name="birth"
                                    helperText="Birth"

                                    sx={{
                                        m: 1,
                                        width: '25ch'
                                    }} />

                            </Grid>
                            <br />

                            {/* 전문 분야 */}
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"

                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Field" name="field" />}
                                />
                                <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
                                {/* 거주국가 */}
                                <Autocomplete
                                    id="country-select-demo"
                                    sx={{ width: 300 }}

                                    autoHighlight
                                    getOptionLabel={(option) => option.label}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            <img
                                                loading="lazy"
                                                width="20"
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                alt=""
                                            />
                                            {option.label} ({option.code}) +{option.phone}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            name="work_nation"
                                            {...params}
                                            label="Choose a country"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    )}
                                />


                            </Grid >
                            <br />

                            {/* 수준 */}
                            <Grid id="field"
                            >
                                <Autocomplete
                                    disablePortal


                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Grade" name="grade" />}
                                />



                            </Grid >
                            <br />

                            {/* 경력 */}
                            <Grid >
                                <TextField
                                    label="Career"
                                    name="career"
                                    sx={{
                                        m: 1,
                                        width: '30ch'
                                    }} />

                                {/* 현재 근무지 */}
                                <TextField
                                    label="Work_place"
                                    name="work_place"

                                    sx={{
                                        m: 1,
                                        width: '25ch'
                                    }} />

                            </Grid>





                            <br />


                        </div>

                    </Box>

                    <br />
                    <br />
                    <div id="Btn-2">
                        <Stack direction="row" spacing={4}>
                            <Button variant="outlined" onClick={SendLogin}>Back</Button>
                            <Button type="submit" variant="outlined" >SignUp</Button>
                        </Stack>
                    </div>
                </form>


            </div >



        </>
    );
};

export default Profile;
