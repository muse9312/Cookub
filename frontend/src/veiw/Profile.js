
import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie'

// ================================  Data  ====================================
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@mui/material/Alert';
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
import Controls from "../component/controls/Controls"
import '../assets/css/Profile.css'
import EudModal from './ProfileModal/EudModal'
import EditEudModal from './ProfileModal/EditEudModal'
import WorkModal from './ProfileModal/WorkModal'
import AwdModal from './ProfileModal/AwdModal'
import CerModal from './ProfileModal/CerModal'



import Navigation from "../component/Navigation";

// import Nation from '../component/data/Nation'

// Fileupload component


import axios from 'axios'

const Profile = () => {

    const src = "https://s3-bucket-react-file-upload-test-5jo.s3.us-east-2.amazonaws.com/upload/"

    const cookies = new Cookies();

    const [EudmodalOpen, setEudModalOpen] = useState(false);
    const [editEudmodalOpen, seteditEudModalOpen] = useState(false);
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
        const api = `http://localhost:8080/profile/${userId}`;
        axios.get(api)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setResData(res.data)

            })






    }, []);


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

                <TableBody>
                    {
                        ResData.degrees && ResData.degrees.map(data =>
                        (<TableRow  >
                            <TableCell size="medium" >{data.education}</TableCell>
                            <TableCell>{data.major}</TableCell>
                            <TableCell>{data.graduation}</TableCell>

                            <TableCell>
                                <Controls.ActionButton
                                    color="primary">
                                    <EditOutlinedIcon fontSize="small"
                                        onClick={seteditEudModalOpen}
                                    />

                                </Controls.ActionButton>
                                <Controls.ActionButton
                                    color="secondary">
                                    <CloseIcon fontSize="small" onClick={() => {
                                        const degreeId = data.degreeId
                                        console.log(degreeId);
                                        const api = `http://localhost:8080/profile/degree/delete/${degreeId}`;
                                        axios.delete(api)
                                            .then((res) => {
                                                console.log(res);

                                                window.location.reload()
                                            })
                                    }} />
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>)
                        )
                    }

                </TableBody>
                {editEudmodalOpen && <EditEudModal seteditOpenModal={seteditEudModalOpen} />}
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
                <hr />
                <br />

                <TableBody>
                    {
                        ResData.awardsCareers && ResData.awardsCareers.map(data =>
                        (<TableRow  >
                            <TableCell size="medium" >{data.compName}</TableCell>
                            <TableCell>{data.issuedAwd}</TableCell>
                            <TableCell>{data.awdName}</TableCell>
                            <TableCell>{data.getAwdDate}</TableCell>

                            <TableCell>
                                <Controls.ActionButton
                                    color="primary">
                                    <EditOutlinedIcon fontSize="small" />
                                </Controls.ActionButton>
                                <Controls.ActionButton
                                    color="secondary">
                                    <CloseIcon fontSize="small" />
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>)
                        )
                    }
                </TableBody>


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
                <hr />
                <br />

                <TableBody>
                    {
                        ResData.workCareers && ResData.workCareers.map(data =>
                        (<TableRow  >
                            <TableCell size="medium" >{data.compName}</TableCell>
                            <TableCell>{data.jobPosition}</TableCell>
                            <TableCell>{data.location}</TableCell>
                            <TableCell>{data.period}</TableCell>

                            <TableCell>
                                <Controls.ActionButton
                                    color="primary">
                                    <EditOutlinedIcon fontSize="small" />
                                </Controls.ActionButton>
                                <Controls.ActionButton
                                    color="secondary">
                                    <CloseIcon fontSize="small" />
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>)
                        )
                    }
                </TableBody>


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
                <hr />
                <br />

                <TableBody>
                    {
                        ResData.certifications && ResData.certifications.map(data =>
                        (<TableRow  >
                            <TableCell size="medium" >{data.certName}</TableCell>
                            <TableCell>{data.issuedCert}</TableCell>
                            <TableCell>{data.getCertDate}</TableCell>


                            <TableCell>
                                <Controls.ActionButton
                                    color="primary">
                                    <EditOutlinedIcon fontSize="small" />
                                </Controls.ActionButton>
                                <Controls.ActionButton
                                    color="secondary">
                                    <CloseIcon fontSize="small" />
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>)
                        )
                    }
                </TableBody>


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


