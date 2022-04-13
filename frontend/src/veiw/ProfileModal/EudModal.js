import React from "react";
import axios from 'axios'
import "../../assets/css/Modal.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Cookies from 'universal-cookie';


function EudModal({ setOpenModal }) {
    const cookies = new Cookies();

    function EudData(e) {
        e.preventDefault(e);
        console.log(e);

        let data = {
            // 최종학력
            "education": document.querySelector('[name=Education]').value,

            // 전공
            "major": document.querySelector('[name=Major]').value,

            // 졸업연도
            "graduation": document.querySelector('[name=Grduation]').value,



        }
        console.log(data);



        axios
            .post(`http://${process.env.REACT_APP_HOST}/profile/degree/${cookies.get('userId')}`, JSON.stringify(data), {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((res) => {
                console.log(res);
                setOpenModal(false);
                // window.location = '/login';
            });






        // // 프로필
        // const file = document.querySelector('[name=file]').files[0];
        // console.log(document.querySelector('[name=file]').value);
        // // 이메일
        // const email = document.querySelector('[name=useremail]').value;
        // console.log(document.querySelector('[name=useremail]').value);
        // // 페스워드
        // const password = document.querySelector('[name=password]').value;
        // console.log(document.querySelector('[name=password]').value);
        // // 이름
        // const username = document.querySelector('[name=username]').value;
        // console.log(document.querySelector('[name=username]').value);
        // // 전화번호
        // const tel = document.querySelector('[name=tel]').value;
        // console.log(document.querySelector('[name=tel]').value);
        // // 생일
        // const birth = document.querySelector('[name=birth]').value;
        // console.log(document.querySelector('[name=birth]').value);
        // // 전문분야
        // const field = document.querySelector('[name=field]').value;
        // console.log(document.querySelector('[name=field]').value);
        // // 거주국가
        // const workNation = document.querySelector('[name=work_nation]').value;
        // console.log(document.querySelector('[name=work_nation]').value);
        // // 수준
        // const grade = document.querySelector('[name=grade]').value;
        // console.log(document.querySelector('[name=grade]').value);
        // // 경력
        // const career = document.querySelector('[name=career]').value;
        // console.log(document.querySelector('[name=career]').value);
        // // 현재 근무지
        // const workPlace = document.querySelector('[name=work_place]').value;
        // console.log(document.querySelector('[name=work_place]').value);

        // const formData = new FormData();

        // formData.append('file', file);
        // formData.append('email', email);
        // formData.append('password', password);
        // formData.append('username', username);
        // formData.append('tel', tel);
        // formData.append('birth', birth);
        // formData.append('field', field);
        // formData.append('workNation', workNation);
        // formData.append('grade', grade);
        // formData.append('career', career);
        // formData.append('workPlace', workPlace);
        // console.log(formData);


        // axios({
        //   url: 'http://${process.env.REACT_APP_HOST}/user/auth/signUp',
        //   headers: {
        //     'content-type': 'multipart/form-data'
        //   },
        //   method: 'post',
        //   data: formData
        // }).then(function (res) {
        //   console.log(res.data);

        //   // window.location = '/login';

        // })
    }
    return (

        <>

            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button className="close"
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="title">
                        <h1>Add education</h1>
                    </div>
                    <div className="body">
                        <p>The next page looks amazing. Hope you want to go there!</p>
                    </div>
                    <form onSubmit={EudData}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                            <div>


                                <Grid>
                                    {/* 최종학력 */}
                                    <TextField
                                        label="Education*"
                                        id="Education"
                                        name="Education"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 전공 */}
                                    <TextField
                                        label="Major*"
                                        id="Major"
                                        name="Major"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 졸업연도 */}
                                    <TextField
                                        id="standard-helperText"
                                        type="date"
                                        name="Grduation"
                                        helperText="Grduation"

                                        sx={{
                                            m: 1,
                                            width: '80ch'
                                        }} />

                                </Grid>

                            </div>

                        </Box>

                        <div className="footer">
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                                id="cancelBtn"
                            >
                                Cancel
                            </button>
                            <button type="submit">Save</button>
                        </div>
                    </form>



                </div>
            </div>


        </>
    );
}

export default EudModal;
