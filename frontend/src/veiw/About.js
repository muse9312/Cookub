import React from "react";
import image from "../assets/img/aboutImg.jpg";
import image2 from "../assets/img/about2.jpg";
import image3 from "../assets/img/about3.jpg";
import style from "../assets/css/About.module.css";
import Navigation from '../component/Navigation'


function About() {
  return (
    <>
      <Navigation />
      <img className={style.image} src={image} alt="about" title="About"></img>
      <img className={style.image2} src={image2} alt="about" title="About"></img>
      <img className={style.image2} src={image3} alt="about" title="About"></img>
    </>
  );
}

export default About;