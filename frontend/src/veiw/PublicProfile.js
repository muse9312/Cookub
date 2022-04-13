
import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie'
import style from './BoardDetail.module.css';
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
import '../assets/css/Profile.css'
import EudModal from './ProfileModal/EudModal'
import WorkModal from './ProfileModal/WorkModal'
import AwdModal from './ProfileModal/AwdModal'
import CerModal from './ProfileModal/CerModal'



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


const PublicProfile = () => {

    const src = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/"

    const cookies = new Cookies();
    const token = cookies.get('token');

    const [recipe, setRecipe] = useState([]);
    const [EudmodalOpen, setEudModalOpen] = useState(false);
    const [CermodalOpen, setCerModalOpen] = useState(false);
    const [AwdmodalOpen, setAwdModalOpen] = useState(false);
    const [WorkmodalOpen, setWorkModalOpen] = useState(false);

    const [dataTest, setDataTest] = useState([]);

    useEffect(() => {
        const userId = window.sessionStorage.getItem("id");
        const api = `http://${process.env.REACT_APP_HOST}/profile/${userId}`;
        axios.get(api)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log(res.data[0][0]);
                setDataTest(res.data)
            })






    }, []);





    return (
        <>
            <Navigation />

            <div className="reg-inner">

                <div className="regbackground">
                    <p className="subtitle">Happy Cooking!!</p>
                </div>

                {/* 프로필 이미지 */}
                <div className="proBox">
                    <img className="profilePic" src={src + cookies.get("profile")} alt="Black dog with red scarf" />
                    <br />
                    <br />
                    <div className="profileInfo">

                        <Typography variant="h4" component="div">
                            <AccountCircleIcon sx={{ fontSize: 30 }} />
                            {recipe.user === undefined ? "" : recipe.user.username}

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

                {/* {result} */}
                {/* <div className="dataMap">
                    {dataTest.map((data, index) => (
                        <div className="dataMap">
                            <h2>{data.title == null ? "제목이 없습니다." : data.title}</h2>
                            {data[index].education}
                            <br />
                            {data[index].major}
                            <br />
                            {data[index].graduation}

                        </div>
                    ))}

                </div> */}


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

export default PublicProfile;


