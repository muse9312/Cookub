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
            .post(`http://localhost:8080/profile/degree/${cookies.get('userId')}`, JSON.stringify(data), {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((res) => {
                console.log(res);
                setOpenModal(false);

                window.location.reload()
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
