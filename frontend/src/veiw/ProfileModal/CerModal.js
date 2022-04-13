import React from "react";
import axios from 'axios'
import "../../assets/css/Modal.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Cookies from 'universal-cookie';


function CerModal({ setOpenModal }) {
    const cookies = new Cookies();

    function CerData(e) {
        e.preventDefault(e);
        console.log(e);

        let data = {
            // 자격증 이름
            "certName": document.querySelector('[name=cert_name]').value,

            //  취득날짜
            "getCertDate": document.querySelector('[name=get_cert_date]').value,

            // 주최측
            "issuedCert": document.querySelector('[name=issued_cert]').value,

        }
        console.log(data);



        axios
            .post(`http://${process.env.REACT_APP_HOST}/profile/cert/${cookies.get('userId')}`, JSON.stringify(data), {
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
                        <h1>Add Certification</h1>
                    </div>
                    <div className="body">
                        <p>The next page looks amazing. Hope you want to go there!</p>
                    </div>
                    <form onSubmit={CerData}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                            <div>


                                <Grid>
                                    {/* 자격증 이름 */}
                                    <TextField
                                        label="Certificate Name*"
                                        id="Certificate Name"
                                        name="cert_name"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 주최측 */}
                                    <TextField
                                        label="Organizers*"
                                        id="Organizers"
                                        name="issued_cert"
                                        sx={{

                                            m: 1,
                                            width: '80ch'
                                        }}
                                    />
                                    {/* 취득연도 */}
                                    <TextField
                                        id="standard-helperText"
                                        type="date"
                                        name="get_cert_date"
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

export default CerModal;
