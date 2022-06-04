import React from "react";
import axios from 'axios'
import "../../assets/css/Modal.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Cookies from 'universal-cookie';


function WorkModal({ setOpenModal }) {
    const cookies = new Cookies();

    function WorkData(e) {
        e.preventDefault(e);
        console.log(e);

        let data = {
            // 회사 이름
            "compName": document.querySelector('[name=comp_name]').value,

            //  직책
            "jobPosition": document.querySelector('[name=job_position]').value,

            // 위치
            "location": document.querySelector('[name=location]').value,

            // 년근무
            "period": document.querySelector('[name=period]').value,


        }
        console.log(data);



        axios
            .post(`http://localhost:8080/profile/work/${cookies.get('userId')}`, JSON.stringify(data), {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((res) => {
                console.log(res);
                setOpenModal(false);

                // window.location = '/login';
            });






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
                        <h1>Add WorkCareer</h1>
                    </div>
                    <div className="body">
                        <p>The next page looks amazing. Hope you want to go there!</p>
                    </div>
                    <form onSubmit={WorkData}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                            <div>


                                <Grid>
                                    {/* 회사이름 */}
                                    <TextField
                                        label="Corporation name*"
                                        id="Corporation name"
                                        name="comp_name"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 직책 */}
                                    <TextField
                                        label="Job Position*"
                                        id="Job Position"
                                        name="job_position"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 위치 */}
                                    <TextField
                                        label="Location*"
                                        id="Location"
                                        name="location"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 년근무 */}
                                    <TextField
                                        label="Period*"
                                        id="Period"
                                        name="period"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />




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

export default WorkModal;
