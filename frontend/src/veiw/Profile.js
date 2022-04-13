
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


const Profile = () => {

    const src = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/"

    const cookies = new Cookies();

    const [EudmodalOpen, setEudModalOpen] = useState(false);
    const [CermodalOpen, setCerModalOpen] = useState(false);
    const [AwdmodalOpen, setAwdModalOpen] = useState(false);
    const [WorkmodalOpen, setWorkModalOpen] = useState(false);

    const [ResData, setResData] = useState([]);

    function EditProfile(e) {
        e.preventDefault()
        window.location.href = "/userinfo"
    }


    useEffect(() => {
        const userId = cookies.get('userId')
        const api = `http://${process.env.REACT_APP_HOST}/profile/${userId}`;
        axios.get(api)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setResData(res.data)
            })






    }, []);

    // axios
    //     .get(`http://${process.env.REACT_APP_HOST}/profile/${cookies.get('userId')}`, {
    //         headers: {
    //             "Content-Type": `application/json`,
    //         },
    //     })
    //     .then((res) => {
    //         console.log(res);


    //         // window.location = '/login';
    //     });

    // function Eudresult() {
    //     data.map((data) => {
    //         for (let i = 0; i < data.degress[i].length; i++) {
    //             return <div>
    //                 {data.degress[i].education}
    //                 <br />
    //                 {data.degress[i].major}
    //                 <br />
    //                 {data.degress[i].graduation}


    //             </div>

    //         }
    //     }
    //     )
    // }

    // const result = dataTest.map(data => {
    //     if(data.role !== "leader")
    //             return <div>{data.name}</div>;
    //     }
    // );




    return (
        <>
            <Navigation />

            <div className="reg-inner">

                <div className="regbackground">
                    <p className="subtitle">Happy Cooking!!</p>
                </div>






                <div className="iconPosition">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="secondary" aria-label="edit">
                            <EditIcon onClick={EditProfile} />
                        </Fab>

                    </Box>
                </div>



                {/* 프로필 이미지 */}
                <div className="proBox">
                    <img className="profilePic" src={src + cookies.get("profile")} alt="Black dog with red scarf" />
                    <br />
                    <br />
                    <div className="profileInfo">

                        <Typography variant="h4" component="div">
                            <AccountCircleIcon sx={{ fontSize: 30 }} />  {ResData.username}
                        </Typography>

                        <Typography variant="h8" component="div">
                            <EmailIcon sx={{ fontSize: 20 }} />&nbsp; {ResData.email}
                        </Typography>


                        <Typography variant="h8" component="div">
                            <ApartmentIcon sx={{ fontSize: 20 }} />&nbsp; {ResData.field}
                        </Typography>

                        <Typography variant="h8" component="div">
                            <ApartmentIcon sx={{ fontSize: 20 }} />&nbsp; {ResData.workPlace}
                        </Typography>

                        <Typography variant="h8" component="div">
                            <PhoneAndroidIcon sx={{ fontSize: 20 }} />&nbsp; {ResData.tel}
                        </Typography>


                    </div>
                </div>

                <br />
                <hr />








            </div >


            {/* 학력 */}
            <div className="reg-inner">

                <Typography variant="h4" component="div">
                    Education
                </Typography>
                <br />

                <div className="dataMap">
                    {ResData.degrees && ResData.degrees.map((data) => (
                        <div className="dataMap">

                            {data.education} &nbsp; {data.major} &nbsp; {data.graduation}



                        </div>
                    ))}

                </div>

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

                <div className="dataMap">
                    {ResData.awardsCareers && ResData.awardsCareers.map((data) => (
                        <div className="dataMap">

                            {data.compName} &nbsp; {data.issuedAwd} &nbsp; {data.awdName} &nbsp; {data.getAwdDate}



                        </div>
                    ))}

                </div>

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

                <div className="dataMap">
                    {ResData.workCareers && ResData.workCareers.map((data) => (
                        <div className="dataMap">

                            {data.compName} &nbsp; {data.jobPosition} &nbsp; {data.location} &nbsp; {data.period}



                        </div>
                    ))}

                </div>

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

                <div className="dataMap">
                    {ResData.certifications && ResData.certifications.map((data) => (
                        <div className="dataMap">

                            {data.certName} &nbsp; {data.issuedCert} &nbsp; {data.getCertDate}



                        </div>
                    ))}

                </div>

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


