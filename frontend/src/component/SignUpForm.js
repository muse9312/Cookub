import React from "react";

import '../assets/css/SignForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import axios from 'axios'



const Profile = () => {

    function SendLogin(e) {
        e.preventDefault();
        window.location.href = "/login"

    }
    function SendSignUp(e) {
        e.preventDefault();
        window.location.href = "/signup"

    }

    function RegData(e) {
        e.preventDefault();
        console.log(e);
        console.log(e.target['0'].value);
        console.log(e.target['1'].value);

        const formData = new FormData();
        const email = e
            .target['0']
            .value;
        const pwd = e
            .target['1']
            .value;

        formData.append("email", email);
        formData.append("pwd", pwd);

        axios({ url: 'http://localhost:8080/user/signIn', method: 'post', data: formData }).then(
            function (res) {
                console.log(res.data);

            }
        )
    }


    return (
        <>
            <div className="auth-inner">
                <div class="background_2">

                    <h1 className="title2">Create your Account</h1>
                    <p className="subtitle">Happy Cooking!!</p>
                    <br />
                    <form onSubmit={RegData}>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 0.5, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />

                        </Box>



                        <br />
                        <div id="Btn-1">
                            <Stack direction="row" spacing={4}>
                                <Button variant="outlined" onClick={SendLogin}>Back</Button>
                                <Button variant="outlined" onClick={SendSignUp}>SignUp</Button>
                            </Stack>
                        </div>
                    </form>



                </div>
            </div>


        </>
    );
};

export default Profile;
