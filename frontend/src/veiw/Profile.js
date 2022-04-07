
import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie'

// ================================  Data  ====================================

import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Fab from '@mui/material/Fab';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid";
import Input from '@mui/material/Input';
import Autocomplete from '@mui/material/Autocomplete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import ReactFileReader from "react-file-reader";

import AvatarInput from "../component/FileUpload/AvatarInput"

import '../assets/css/Profile.css'
import EudModal from './ProfileModal/EudModal'
import WorkModal from './ProfileModal/WorkModal'
import AwdModal from './ProfileModal/AwdModal'
import CerModal from './ProfileModal/CerModal'

import Cook from "../assets/img/sebastian-coman-photography-eBmyH7oO5wY-unsplash.jpg"

import Navigation from "../component/Navigation";

// import Nation from '../component/data/Nation'

// Fileupload component


import axios from 'axios'


// function Modal({ setOpenModal }) {
//     return (
//         <div className="modalBackground">
//             <div className="modalContainer">
//                 <div className="titleCloseBtn">
//                     <button
//                         onClick={() => {
//                             setOpenModal(false);
//                         }}
//                     >
//                         X
//                     </button>
//                 </div>
//                 <div className="title">
//                     <h1>Are You Sure You Want to Continue?</h1>
//                 </div>
//                 <div className="body">
//                     <p>The next page looks amazing. Hope you want to go there!</p>
//                 </div>
//                 <div className="footer">
//                     <button
//                         onClick={() => {
//                             setOpenModal(false);
//                         }}
//                         id="cancelBtn"
//                     >
//                         Cancel
//                     </button>
//                     <button>Continue</button>
//                 </div>
//             </div>
//         </div>
//     );
// }


const Profile = () => {

    const cookies = new Cookies();

    const [EudmodalOpen, setEudModalOpen] = useState(false);
    const [CermodalOpen, setCerModalOpen] = useState(false);
    const [AwdmodalOpen, setAwdModalOpen] = useState(false);
    const [WorkmodalOpen, setWorkModalOpen] = useState(false);

    // function RegData(e) {
    //     e.preventDefault(e);
    //     console.log(e);


    //     axios({
    //         url: 'http://localhost:8080/user/auth/signUp',
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         },
    //         method: 'post',
    //         data: formData
    //     }).then(function (res) {
    //         console.log(res.data);

    //         window.location = '/login';

    //     })
    // }




    return (
        <>
            <Navigation />

            <div className="reg-inner">

                <div className="regbackground">
                    <p className="subtitle">Happy Cooking!!</p>
                </div>






                <div className="iconPosition">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="edit">
                            <EditIcon />
                        </Fab>

                    </Box>
                </div>



                {/* 프로필 이미지 */}
                <div className="proBox">
                    <img className="profilePic" src={Cook} alt="Black dog with red scarf" />
                    <br />
                    <br />
                    <div className="profileInfo">

                        <Typography variant="h4" component="div">
                            <AccountCircleIcon sx={{ fontSize: 30 }} />  {cookies.get('username')}
                        </Typography>

                        <Typography variant="h8" component="div">
                            <EmailIcon sx={{ fontSize: 20 }} />&nbsp; {cookies.get('email')}
                        </Typography>


                        <Typography variant="h8" component="div">
                            <ApartmentIcon sx={{ fontSize: 20 }} />&nbsp; {cookies.get('field')}
                        </Typography>

                        <Typography variant="h8" component="div">
                            <ApartmentIcon sx={{ fontSize: 20 }} />&nbsp; {cookies.get('workPlace')}
                        </Typography>

                        <Typography variant="h8" component="div">
                            <PhoneAndroidIcon sx={{ fontSize: 20 }} />&nbsp; {cookies.get('tel')}
                        </Typography>


                    </div>
                </div>

                <br />
                <hr />

                <Stack direction="row" spacing={2}>
                    <Button variant="contained">???</Button>
                    <Button variant="contained" href="#contained-buttons">
                        ???
                    </Button>
                    <Button variant="contained" href="#contained-buttons">
                        Url
                    </Button>
                </Stack>

                <br />




            </div >


            {/* 학력 */}
            <div className="reg-inner">

                <Typography variant="h4" component="div">
                    Education
                </Typography>
                <br />
                <br />



                {EudmodalOpen && <EudModal setOpenModal={setEudModalOpen} />}

                <div className="iconPosition">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="primary" aria-label="add">
                            <AddIcon onClick={setEudModalOpen} />


                        </Fab>


                    </Box>
                </div>






            </div >
            {/* 수상경력 */}
            <div className="reg-inner">

                <Typography variant="h4" component="div">
                    AwardsCareer
                </Typography>
                <br />
                <br />



                {AwdmodalOpen && <AwdModal setOpenModal={setAwdModalOpen} />}

                <div className="iconPosition">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="primary" aria-label="add">
                            <AddIcon onClick={setAwdModalOpen} />


                        </Fab>


                    </Box>
                </div>






            </div >
            {/* 경력 */}
            <div className="reg-inner">

                <Typography variant="h4" component="div">
                    WorkCareer
                </Typography>
                <br />
                <br />



                {WorkmodalOpen && <WorkModal setOpenModal={setWorkModalOpen} />}

                <div className="iconPosition">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="primary" aria-label="add">
                            <AddIcon onClick={setWorkModalOpen} />


                        </Fab>


                    </Box>
                </div>






            </div >
            {/* 자격증 */}
            <div className="reg-inner">

                <Typography variant="h4" component="div">
                    Certification
                </Typography>
                <br />
                <br />



                {CermodalOpen && <CerModal setOpenModal={setCerModalOpen} />}

                <div className="iconPosition">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="primary" aria-label="add">
                            <AddIcon onClick={setCerModalOpen} />


                        </Fab>


                    </Box>
                </div>






            </div >



        </>
    );
};

export default Profile;


