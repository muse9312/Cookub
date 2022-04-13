import React from "react";
import axios from 'axios'
import "../../assets/css/Modal.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Cookies from 'universal-cookie';


function AwdModal({ setOpenModal }) {
    const cookies = new Cookies();

    function AwdData(e) {
        e.preventDefault(e);
        console.log(e);

        let data = {
            // 대회 이름
            "compName": document.querySelector('[name=comp_name]').value,

            // 상 이름
            "awdName": document.querySelector('[name=awd_name]').value,


            // 취득연도
            "getAwdDate": document.querySelector('[name=get_awd_date]').value,

            // 주최측
            "issuedAwd": document.querySelector('[name=issued_awd]').value,


        }
        console.log(data);



        axios
            .post(`http://${process.env.REACT_APP_HOST}/profile/awd/${cookies.get('userId')}`, JSON.stringify(data), {
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
                        <h1>Add education</h1>
                    </div>
                    <div className="body">
                        <p>The next page looks amazing. Hope you want to go there!</p>
                    </div>
                    <form onSubmit={AwdData}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                            <div>


                                <Grid>
                                    {/* 대회이름 */}
                                    <TextField
                                        label="Name of the competition*"
                                        id="Name of the competition"
                                        name="comp_name"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 상 이름 */}
                                    <TextField
                                        label="Award Name*"
                                        id="Award Name"
                                        name="awd_name"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 주최자 */}
                                    <TextField
                                        label="Organizers*"
                                        id="Organizers"
                                        name="issued_awd"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 취득연도 */}
                                    <TextField
                                        id="standard-helperText"
                                        type="date"
                                        name="get_awd_date"
                                        helperText="Acquisition date"

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

export default AwdModal;
